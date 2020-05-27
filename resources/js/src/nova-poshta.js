var apiKey = 'c802cd9bcb599879d65035f6ccd34142';

//var apiKey = '80c70f6f7216a3933464d2091d307495'; //тест - другого аккаунта


//var apiKey = 'bd2a767eaa492c24259e03d9208366a2'; //тест - другого аккаунта


$(function () {

    var number = '20400149113895';
    datePayedKeeping(number);


    if ($('#counterparty_sender').val()) loadWarehouses('Sender');
    loadWarehouses('Recipient');

    //Расчёт веса и объема посылки
    var width = $('#width').val();
    var height = $('#height').val();
    var length = $('#length').val();


    getVolumeWeight(width, height, length);
    getVolumeGeneral(width, height, length);

    $('#width, #length, #height').on('change', function () {
        width = $('#width').val();
        height = $('#height').val();
        length = $('#length').val();
        getVolumeWeight(width, height, length);
        getVolumeGeneral(width, height, length);
    });


    //Расчёт стоимости доставки
    calculateDeliveryCost();
    $('#ServiceTypes, #counterparty_sender, #CityRecipient, #weight, #CargoTypes, #SeatsAmount').on('change', function () {
        calculateDeliveryCost();
    });

    //Расчёт даты доставки
    calculateDeliveryDate();
    $('#ServiceTypes, #counterparty_sender, #CityRecipient, #DateDeliverySend').on('change', function () {
        calculateDeliveryDate();
    });


    //Смена типа доставки (Отделение - Отделение или Отделение - Адрес)
    $('#ServiceTypes').on('change', function () {
        changeServiceType();
    });


    $('#novaposhta').on('submit', function (e) {
        e.preventDefault();
        setNovaPoshtaParameters();
    });


    //Загрузить список реестров
    getScansheets();


    //Добавление ЭН в реестр
    $('#addToRegister').click(function (e) {
        e.preventDefault();
        addToRegister();
    });


    //Тест другого аккаунта только по ключу апи

    /* getCounteragents();


     var settings = {
         "async": false,
         "crossDomain": true,
         "url": "https://api.novaposhta.ua/v2.0/json/",
         "method": "POST",
         "headers": {
             "content-type": "application/json"

         },
         "processData": false,
         "data": '{ ' +
         '"apiKey": "' + apiKey + '",' +
         '"modelName": "Counterparty", ' +
         '"calledMethod": "getCounterpartyOptions",' +
         '"methodProperties": { ' +
             '"Ref": "24c10a3a-9b3a-11e6-a54a-005056801333"'+
             '}' +
         '}'

     };


     $.ajax(settings).done(function (response) {
         console.log(response);
     });*/
});


function loadWarehouses(type) {

    if (type == 'Sender') {
        //Загрузка отделений для первого города при загрузке страницы
        var firstCity = $('#counterparty_sender').val();
        getWarehouses(firstCity, 'Sender', $('#SenderWarehouseType'));


        //Загрузка отделений при выборе населённого пункта
        $('#counterparty_sender').on('change', function () {
            var cityRef = $(this).val();
            getWarehouses(cityRef, 'Sender', $('#SenderWarehouseType'));
            setWarehouseType('Sender');
        });

        //Подвязка типа отделения к скрытому инпуту
        $('#SenderAddress').on('change', function () {

            var houseSelect = document.getElementById('SenderAddress');
            setWarehouseType('Sender');
        });
    }
    else if (type == 'Recipient') {
        //Загрузка отделений для первого города при загрузке страницы
        //var firstCity = $('#CityRecipient').val();
        //getWarehouses(firstCity, 'Recipient', $('#RecipientWarehouseType'));


        //Загрузка отделений при выборе населённого пункта
        $('#CityRecipient').on('change', function () {
            var cityRef = $(this).val();
            getWarehouses(cityRef, 'Recipient', $('#RecipientWarehouseType'));
            setWarehouseType('Recipient');
        });

        //Подвязка типа отделения к скрытому инпуту
        $('#RecipientAddress').on('change', function () {
            setWarehouseType('Recipient');
        });
    }
}

function setWarehouseType(type) {
    var houseSelect = $("#" + type + "Address").val();

    var index = $("#" + type + "AddressList").find('.item[data-value="' + houseSelect + '"]').index();

    var typeRef = $("#" + type + "AddressList .item").eq(index).attr('data-warehouse-type');
    $('#' + type + 'WarehouseType').val(typeRef);
}


function getWarehouses(cityRef, type, hidden) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"

        },

        "processData": false,
        "data": '{  ' +
        '"apiKey": "' + apiKey + '", ' +
        '"methodProperties": {"CityRef": "' + cityRef + '"}, ' +
        '"modelName": "Address", ' +
        '"calledMethod": "getWarehouses"' +
        '}'
    };


    var houseSelect = document.getElementById(type + 'AddressList');

    $.ajax(settings).done(function (response) {

        var houses = response['data'];
        $('#' + type + "Address").val(houses[0]['Ref']);
        $('#' + type + "Address").siblings('span.text').text(houses[0]['Description']);

        houseSelect.innerHTML = '';
        houses.forEach(function (element) {
            var opt = document.createElement('div');
            opt.classList.add('item');
            opt.setAttribute('data-value', element['Ref']);
            opt.setAttribute('data-warehouse-type', element['TypeOfWarehouse']);
            opt.innerHTML = element['Description'];
            houseSelect.appendChild(opt);
        });
    });

}


function getVolumeWeight(width, height, length) {
    var volumeWeight = (width * height * length) / 4000;


    volumeWeight = volumeWeight < 0.10 ? 0.10 : volumeWeight;
    $('#VolumeWeight').val(volumeWeight.toFixed(2));

}

function getVolumeGeneral(width, height, length) {
    var volumeGeneral = (width * height * length) / 1000000;

    volumeGeneral = volumeGeneral < 0.0004 ? 0.0004 : volumeGeneral;
    $('#VolumeGeneral').val(volumeGeneral.toFixed(4));
}


function calculateDeliveryCost() {

    var citySender = $('#counterparty_sender').val(),
        cityRecipient = $('#CityRecipient').val(),
        weight = $('#weight').val(),
        serviceType = $('#ServiceTypes').val(),
        cost = 500,
        cargoType = $('#CargoTypes').val(),
        seatsAmount = $('#SeatsAmount').val();

    if (citySender && cityRecipient && weight && serviceType && cost && cargoType && seatsAmount) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.novaposhta.ua/v2.0/json/",
            "method": "POST",
            "headers": {
                "content-type": "application/json"

            },
            "processData": false,
            "data": '{ ' +
            '"apiKey": "' + apiKey + '", ' +
            '"modelName": "InternetDocument", ' +
            '"calledMethod": "getDocumentPrice", ' +
            '"methodProperties": { ' +
            '"CitySender": "' + citySender + '",' +
            '"CityRecipient": "' + cityRecipient + '", ' +
            '"Weight": "' + weight + '", ' +
            '"ServiceType": "' + serviceType + '", ' +
            '"Cost": "' + cost + '", ' +
            '"CargoType": "' + cargoType + '", ' +
            '"SeatsAmount": "' + seatsAmount + '"' +
            '} ' +
            '}'

        };

        $.ajax(settings).done(function (response) {
            var cost = response['data'][0]['Cost'];

            $('#deliveryCost').text(cost + " грн.");
        });
    }
}


function calculateDeliveryDate() {
    var citySender = $('#counterparty_sender').val(),
        cityRecipient = $('#CityRecipient').val(),
        serviceType = $('#ServiceTypes').val(),
        date = $('#DateDeliverySend').val();

    if (citySender && cityRecipient && serviceType && date) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.novaposhta.ua/v2.0/json/",
            "method": "POST",
            "headers": {
                "content-type": "application/json"

            },
            "processData": false,
            "data": '{ ' +
            '"apiKey": "' + apiKey + '", ' +
            '"modelName": "InternetDocument", ' +
            '"calledMethod": "getDocumentDeliveryDate", ' +
            '"methodProperties": { ' +
            '"CitySender": "' + citySender + '",' +
            '"CityRecipient": "' + cityRecipient + '", ' +
            '"ServiceType": "' + serviceType + '",' +
            '"DateTime": "' + date + '"' +
            '} ' +
            '}'

        };

        $.ajax(settings).done(function (response) {
            var date = response['data'][0]['DeliveryDate']['date'];


            date = new Date(date);

            var day = date.getDate(),
                month = date.getMonth() + 1,
                year = date.getFullYear();

            day = ('0' + day).slice(-2);
            month = ('0' + month).slice(-2);

            date = day + '.' + month + '.' + year;


            $('#deliveryDate').text(date);
        });
    }
}


function changeServiceType() {
    if ($('#ServiceTypes').val() == 'WarehouseWarehouse') {
        $('.warehouse-warehouse').show();
        $('.warehouse-doors').hide();
    }
    else if ($('#ServiceTypes').val() == 'WarehouseDoors') {
        $('.warehouse-doors').show().css('display', 'flex');
        $('.warehouse-warehouse').hide();
    }
}


function setNovaPoshtaParameters() {
    var parameters = {
        payerType: $('#TypesOfPayers').val(),
        paymentMethod: $('#PaymentForm').val(),
        cargoType: $('#CargoTypes').val(),
        volumetricWidth: $("#width").val(),
        volumetricLength: $('#length').val(),
        volumetricHeight: $('#height').val(),
        volumeGeneral: $('#VolumeGeneral').val(),
        weight: $('#weight').val(),
        serviceType: $('#ServiceTypes').val(),
        seatsAmount: $('#SeatsAmount').val(),
        description: $('#CargoDescriptionList').val(),
        cost: '500',
        citySender: $('#counterparty_sender').val(),
        sender: $('#Counterparties').val(),
        senderAddress: $('#SenderAddress').val(),
        contactSender: $('#CounterpartyContactPersons').val().split('|')[0],
        sendersPhone: $('#CounterpartyContactPersons').val().split('|')[1],
        cityRecipient: $('#CityRecipient').val(),
        recipientName: $('#RecipientName').val(),
        recipientAddress: $('#RecipientAddress').val(),
        recipientPhone: $('#RecipientPhone').val(),
        recipientHouse: $('#RecipientHouse').val(),
        recipientFlat: $('#RecipientFlat').val(),
        recipientAddressName: $('#RecipientAddressName').val(),
        recipientCityName: $('#CityRecipient').siblings('span.text').text(),
        recipient: '',
        dateTime: $("#DateDeliverySend").val(),
        redbox: '',
        warehouseTypeSender: $('#SenderWarehouseType').val(),
        warehouseTypeRecipient: $('#RecipientWarehouseType').val(),
        backward: $('#backwardDelivery').prop('checked'),
        backwardDeliveryCargoTypes: $('#BackwardDeliveryCargoTypes').val(),
        backwardPrice: $('#Price').val(),
        scansheet: $('#checkScansheet').prop('checked'),
        scansheetRef: $('#ScansheetList').val(),
        redboxBarCode: $('#RedBoxBarcode').val()
    };


    // Get Recipient Ref - Start
    var firstName = parameters['recipientName'].split(' ')[1],
        lastName = parameters['recipientName'].split(' ')[0],
        middleName = parameters['recipientName'].split(' ')[2];


    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"

        },
        "processData": false,
        "data": '{ ' +
        '"apiKey": "' + apiKey + '",' +
        '"modelName": "Counterparty", ' +
        '"calledMethod": "save",' +
        '"methodProperties": {' +
        '"FirstName": "' + firstName + '",' +
        '"MiddleName": "' + middleName + '",' +
        '"LastName": "' + lastName + '", ' +
        '"Phone": "' + parameters['recipientPhone'] + '", ' +
        '"Email": "", ' +
        '"CounterpartyType": "PrivatePerson",' +
        '"CounterpartyProperty": "Recipient"' +
        '} ' +
        '}'

    };


    $.ajax(settings).done(function (response) {
        if (response['success']) {
            parameters['recipient'] = response['data'][0]['Ref'].toString();
            parameters['contactRecipient'] = response['data'][0]['ContactPerson']['data'][0]['Ref'];
            createTTN(parameters);
        }
        else{
            npErrors(response['errorCodes']);
        }
    });

    // Get Recipient Ref - End
}


function createTTN(parameters) {

    var poshtomat = 'f9316480-5f2d-425d-bc2c-ac7cd29decf0';


    var backward = '';

    // console.log(parameters);

    if (parameters['backward']) {
        backward = ', "BackwardDeliveryData": [' +
            '{' +
            '"PayerType": "' + parameters['payerType'] + '",' +
            '"CargoType": "' + parameters['backwardDeliveryCargoTypes'] + '",' +
            '"RedeliveryString": "' + parameters['backwardPrice'] + '"' +
            '}' +
            ']';
    }


    var settings = {};
    if (parameters['serviceType'] === 'WarehouseWarehouse') {

        if (parameters['warehouseTypeRecipient'] == poshtomat) {
            if (validationPoshtomat(parameters).length === 0) {
                settings = {
                    "async": false,
                    "crossDomain": true,
                    "url": "https://api.novaposhta.ua/v2.0/json/",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json"

                    },
                    "processData": false,
                    "data": '{ ' +
                    '"apiKey": "' + apiKey + '",' +
                    '"modelName": "InternetDocument", ' +
                    '"calledMethod": "save",' +

                    '"methodProperties": { ' +
                    '"OptionsSeat": [' +
                    '{' +
                    '"volumetricVolume" : "' + parameters['volumeGeneral'] + '",' +
                    '"volumetricWidth" : "' + parameters['volumetricWidth'] + '",' +
                    '"volumetricLength" : "' + parameters['volumetricLength'] + '",' +
                    '"volumetricHeight" : "' + parameters['volumetricHeight'] + '",' +
                    '"weight" : "' + parameters['weight'] + '"' +
                    '}' +
                    '],' +
                    '"PayerType": "' + parameters['payerType'] + '",' +
                    '"PaymentMethod": "' + parameters['paymentMethod'] + '",' +
                    '"DateTime": "' + parameters['dateTime'] + '",' +
                    '"CargoType": "' + parameters['cargoType'] + '",' +
                    '"ServiceType": "' + parameters['serviceType'] + '",' +
                    '"SeatsAmount": "' + parameters['seatsAmount'] + '",' +
                    '"Description": "' + parameters['description'] + '",' +
                    '"Cost": "' + parameters['cost'] + '",' +
                    '"RedBoxBarcode": "' + parameters['redboxBarCode'] + '",' +
                    '"CitySender": "' + parameters['citySender'] + '",' +
                    '"Sender": "' + parameters['sender'] + '",' +
                    '"SenderAddress": "' + parameters['senderAddress'] + '",' +
                    '"ContactSender": "' + parameters['contactSender'] + '",' +
                    '"SendersPhone": "' + parameters['sendersPhone'] + '",' +
                    '"CityRecipient": "' + parameters['cityRecipient'] + '",' +
                    '"Recipient": "' + parameters['recipient'] + '",' +
                    '"RecipientAddress": "' + parameters['recipientAddress'] + '",' +
                    '"ContactRecipient": "' + parameters['contactRecipient'] + '",' +
                    '"RecipientsPhone": "' + parameters['recipientPhone'] + '" ' +
                    backward +
                    '} ' +
                    '}'

                };
            }
            else {
                // console.log(validationPoshtomat(parameters));
            }

        }
        else {
            settings = {
                "async": false,
                "crossDomain": true,
                "url": "https://api.novaposhta.ua/v2.0/json/",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"

                },
                "processData": false,
                "data": '{ ' +
                '"apiKey": "' + apiKey + '",' +
                '"modelName": "InternetDocument", ' +
                '"calledMethod": "save",' +

                '"methodProperties": { ' +
                '"PayerType": "' + parameters['payerType'] + '",' +
                '"PaymentMethod": "' + parameters['paymentMethod'] + '",' +
                '"DateTime": "' + parameters['dateTime'] + '",' +
                '"CargoType": "' + parameters['cargoType'] + '",' +
                '"VolumeGeneral": "' + parameters['volumeGeneral'] + '",' +
                '"Weight": "' + parameters['weight'] + '",' +
                '"ServiceType": "' + parameters['serviceType'] + '",' +
                '"SeatsAmount": "' + parameters['seatsAmount'] + '",' +
                '"Description": "' + parameters['description'] + '",' +
                '"Cost": "' + parameters['cost'] + '",' +
                '"RedBoxBarcode": "' + parameters['redboxBarCode'] + '",' +
                '"CitySender": "' + parameters['citySender'] + '",' +
                '"Sender": "' + parameters['sender'] + '",' +
                '"SenderAddress": "' + parameters['senderAddress'] + '",' +
                '"ContactSender": "' + parameters['contactSender'] + '",' +
                '"SendersPhone": "' + parameters['sendersPhone'] + '",' +
                '"CityRecipient": "' + parameters['cityRecipient'] + '",' +
                '"Recipient": "' + parameters['recipient'] + '",' +
                '"RecipientAddress": "' + parameters['recipientAddress'] + '",' +
                '"ContactRecipient": "' + parameters['contactRecipient'] + '",' +
                '"RecipientsPhone": "' + parameters['recipientPhone'] + '" ' +
                backward +
                '} ' +
                '}'

            };
        }


    }
    else if (parameters['serviceType'] === 'WarehouseDoors') {
        settings = {
            "async": false,
            "crossDomain": true,
            "url": "https://api.novaposhta.ua/v2.0/json/",
            "method": "POST",
            "headers": {
                "content-type": "application/json"

            },
            "processData": false,
            "data": '{ ' +
            '"apiKey": "' + apiKey + '",' +
            '"modelName": "InternetDocument", ' +
            '"calledMethod": "save",' +
            '"methodProperties": { ' +
            '"NewAddress": "1",' +
            '"PayerType": "' + parameters['payerType'] + '",' +
            '"PaymentMethod": "' + parameters['paymentMethod'] + '",' +
            '"DateTime": "' + parameters['dateTime'] + '",' +
            '"CargoType": "' + parameters['cargoType'] + '",' +
            '"VolumeGeneral": "' + parameters['volumeGeneral'] + '",' +
            '"Weight": "' + parameters['weight'] + '",' +
            '"ServiceType": "' + parameters['serviceType'] + '",' +
            '"SeatsAmount": "' + parameters['seatsAmount'] + '",' +
            '"Description": "' + parameters['description'] + '",' +
            '"Cost": "' + parameters['cost'] + '",' +
            '"RedBoxBarcode": "' + parameters['redboxBarCode'] + '",' +
            '"CitySender": "' + parameters['citySender'] + '",' +
            '"Sender": "' + parameters['sender'] + '",' +
            '"SenderAddress": "' + parameters['senderAddress'] + '",' +
            '"ContactSender": "' + parameters['contactSender'] + '",' +
            '"SendersPhone": "' + parameters['sendersPhone'] + '",' +
            '"RecipientArea": "",' +
            '"RecipientAreaRegions": "",' +
            '"RecipientCityName": "' + parameters['recipientCityName'] + '",' +
            '"RecipientAddressName": "' + parameters['recipientAddressName'] + '",' +
            '"RecipientHouse": "' + parameters['recipientHouse'] + '",' +
            '"RecipientFlat": "' + parameters['recipientFlat'] + '",' +
            '"RecipientName": "' + parameters['recipientName'] + '",' +
            '"RecipientsPhone": "' + parameters['recipientPhone'] + '", ' +
            '"RecipientType": "PrivatePerson" ' +
            backward +
            '} ' +
            '}'
        };
    }


    $.ajax(settings).done(function (response) {
            // console.log(response);
            if (parameters['scansheet'] && response['success']) {
                addToRegister(parameters, response['data'][0]['Ref']);
                alertMessage('success', 'Успіх!', 'ТТН успішно створена.');
            }
            else if(response['success']){
                alertMessage('success', 'Успіх!', 'ТТН успішно створена.');
            }
            else if (!response['success']){
                // console.log(response['errorCodes']);
                npErrors(response['errorCodes']);
            }
        }
    );

}


function validationPoshtomat(parameters) {
    var errors = [];

    if (parameters['cargoType'] !== 'Cargo' && parameters['cargoType'] !== 'Documents') {
        errors.push('Тип отправления на почтомат может быть только "Груз" или "Документы".');
    }

    if (parseInt(parameters['seatsAmount']) > 1) {
        errors.push('При создании отправления на почтомат, можно указывать только одно место на одно отправление.');
    }
    if (parseInt(parameters['volumetricWidth']) > 36 ||
        parseInt(parameters['volumetricLength']) > 40 ||
        parseInt(parameters['volumetricHeight']) > 58 ||
        parseInt(parameters['weight']) > 30) {
        errors.push('Максимальные габариты посылки: 36х40х58. Максимальный вес: 30кг');
    }

    if (parameters['payerType'] !== 'Sender' && parameters['payerType'] !== 'ThirdPerson') {
        errors.push('Плательщиком может быть только Отправитель и/или Третье лицо.');
    }

    return errors;
}


function getScansheets() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"

        },
        "processData": false,
        "data": '{ ' +
        '"apiKey": "' + apiKey + '",' +
        '"modelName": "ScanSheet", ' +
        '"calledMethod": "getScanSheetList"' +
        '}'

    };


    $.ajax(settings).done(function (response) {

        var scansheets = response['data'];
        var scansheetSelect = document.getElementById('ScansheetsListOrder');
        scansheetSelect.innerHTML = '';

        var opt = document.createElement('div');
        opt.classList.add('item');
        opt.setAttribute('data-value', 'new');
        opt.innerHTML = '- Додати в новий реєстр -';
        scansheetSelect.appendChild(opt);

        scansheets.forEach(function (element) {
            var opt = document.createElement('div');
            opt.classList.add('item');
            opt.setAttribute('data-value', element['Ref']);
            opt.innerHTML = element['Number'] + ' (' + element['DateTime'] + ')';
            scansheetSelect.appendChild(opt);
        });
    });
}


function addToRegister(parameters, declarationRef) {

    var scansheetRef = '';

    if (parameters['scansheetRef'] !== 'new') {
        scansheetRef = ', "Ref": "' + parameters['scansheetRef'] + '"';
    }

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"

        },
        "processData": false,
        "data": '{ ' +
        '"apiKey": "' + apiKey + '",' +
        '"modelName": "ScanSheet", ' +
        '"calledMethod": "insertDocuments",' +
        '"methodProperties": { ' +
        '"DocumentRefs": [' +
        '"' + declarationRef + '"' +
        ']' +
        scansheetRef +
        '}' +
        '}'

    };


    // console.log(settings);
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}


function getCounteragents() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"

        },

        "processData": false,
        "data": '{  ' +
        '"apiKey": "' + apiKey + '", ' +
        '"methodProperties": {"CounterpartyProperty": "Sender"}, ' +
        '"modelName": "Counterparty", ' +
        '"calledMethod": "getCounterparties"' +
        '}'
    };


    var houseSelect = document.getElementById('Counterparties');

    $.ajax(settings).done(function (response) {

        var houses = response['data'];
        houseSelect.innerHTML = '';
        houses.forEach(function (element) {
            var opt = document.createElement('option');
            opt.value = element['Ref'];
            opt.innerHTML = element['Description'];
            houseSelect.appendChild(opt);
        });
        $('#Counterparties').selectpicker('refresh');
    });


    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"

        },

        "processData": false,
        "data": '{  ' +
        '"apiKey": "' + apiKey + '", ' +
        '"methodProperties": {"Ref": "' + $('#Counterparties').val() + '"}, ' +
        '"modelName": "Counterparty", ' +
        '"calledMethod": "getCounterpartyContactPersons"' +
        '}'
    };


    var houseSelect = document.getElementById('CounterpartyContactPersons');

    $.ajax(settings).done(function (response) {

        var houses = response['data'];
        houseSelect.innerHTML = '';
        houses.forEach(function (element) {
            var opt = document.createElement('option');
            opt.value = element['Ref'] + '|' + element['Phones']
            opt.innerHTML = element['Description'] + ' (' + element['Phones'] + ')';
            houseSelect.appendChild(opt);
        });
        $('#CounterpartyContactPersons').selectpicker('refresh');
    });
}


function npErrors(errors) {
    $.ajax({
        type: 'POST',
        url: 'novaposhta_errors.php',
        data: { np_errors: JSON.stringify(errors) },
        success: function(response){
            var errors_list = '<ul style="padding-left: 15px">';


            JSON.parse(response).forEach(function (el) {
                errors_list+= "<li>" + el['MessageDescriptionUA'] + "</li>";
            });


            errors_list += "</ul>";

            alertMessage('danger', 'Помилка Нової Пошти', errors_list, 10);
        },
        error: function(msg){
            alert("Error: "+msg);
        }
    });
}


//Дата начала платного хранения
function datePayedKeeping(number) {


    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://api.novaposhta.ua/v2.0/json/",
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "processData": false,
        "data": '{ ' +
            '"apiKey": "' + apiKey + '",' +
            '"modelName": "TrackingDocument", ' +
            '"calledMethod": "getStatusDocuments", ' +
            '"methodProperties": {' +
                '"Documents": [' +
                    '{' +
                        '"DocumentNumber": "' + number + '"' +
                    '}' +
                ']'  +
            '} ' +
        '}'

    };


    $.ajax(settings).done(function (response) {
        if (response['success']) {
           // console.log(response['data'][0]['DatePayedKeeping']);
        }
        else{
            npErrors(response['errorCodes']);
        }
    });
}