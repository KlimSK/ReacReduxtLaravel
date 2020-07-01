-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июл 01 2020 г., 17:19
-- Версия сервера: 5.6.43
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `thesis`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Laptops', '2020-06-07 13:56:10', '2020-06-07 13:56:10'),
(2, 'Phones', '2020-06-07 15:35:18', '2020-06-07 15:35:18'),
(3, 'Tablets', '2020-06-07 15:36:51', '2020-06-07 15:36:51'),
(4, 'PC', '2020-06-07 15:48:45', '2020-06-07 15:48:45'),
(5, 'test2', '2020-06-07 15:50:21', '2020-06-11 20:07:21');

-- --------------------------------------------------------

--
-- Структура таблицы `connections`
--

CREATE TABLE `connections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `price` double(8,2) NOT NULL,
  `script` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `additional_field_1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_3` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_4` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `connections`
--

INSERT INTO `connections` (`id`, `website`, `category_id`, `product_id`, `price`, `script`, `additional_field_1`, `additional_field_2`, `additional_field_3`, `additional_field_4`, `created_at`, `updated_at`) VALUES
(9, 'http://test.landing/', NULL, 5, 5555.00, 'api_connection_d6Z6wCsu.js', NULL, NULL, NULL, NULL, '2020-06-28 15:41:15', '2020-06-28 16:21:01'),
(10, 'http://test.landing/', NULL, 10, 333.00, 'api_connection_uw6IHeZ3.js', 'test 1', 'test 2', 'test 3', 'test 4', '2020-06-28 22:26:59', '2020-06-28 22:29:40');

-- --------------------------------------------------------

--
-- Структура таблицы `currencies`
--

CREATE TABLE `currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usd` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `currencies`
--

INSERT INTO `currencies` (`id`, `name`, `symbol`, `shortName`, `usd`, `created_at`, `updated_at`) VALUES
(1, 'Russian Ruble', '₽', 'RUB', 69.5, '2020-06-06 15:22:22', '2020-06-24 21:55:41'),
(2, 'United States Dollar', '$', 'USD', 1, '2020-06-06 15:50:39', '2020-06-24 21:55:24'),
(3, 'Ukrainian hryvnia', '₴', 'UAH', 26.67, '2020-06-12 16:05:12', '2020-06-24 21:55:19'),
(4, 'Euro', '€', 'EUR', 0.9, '2020-06-24 21:57:17', '2020-06-24 21:57:17');

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Test', '+380981234567', NULL, '2020-06-18 18:52:04', '2020-06-18 18:52:04'),
(2, 'Admin', '+380981234562', NULL, '2020-06-20 23:52:29', '2020-06-20 23:52:29'),
(3, 'John Smith', '+380987777777', NULL, '2020-06-24 12:47:22', '2020-06-24 12:47:22'),
(4, 'Phillip Stones', '+380983333333', NULL, '2020-06-24 18:31:51', '2020-06-24 18:31:51'),
(5, 'Rick Grymes', '+380985555555', NULL, '2020-06-24 18:33:18', '2020-06-24 18:33:18');

-- --------------------------------------------------------

--
-- Структура таблицы `customer_orders`
--

CREATE TABLE `customer_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `customer_orders`
--

INSERT INTO `customer_orders` (`id`, `order_id`, `customer_id`, `created_at`, `updated_at`) VALUES
(2, 10, 1, '2020-06-18 21:11:15', '2020-06-18 21:11:15'),
(3, 12, 1, '2020-06-18 21:30:25', '2020-06-18 21:30:25'),
(4, 13, 1, '2020-06-20 20:42:42', '2020-06-20 20:42:42'),
(5, 14, 1, '2020-06-20 20:47:49', '2020-06-20 20:47:49'),
(6, 15, 1, '2020-06-20 21:40:22', '2020-06-20 21:40:22'),
(7, 16, 2, '2020-06-20 21:42:06', '2020-06-20 23:52:55'),
(8, 17, 1, '2020-06-20 21:43:01', '2020-06-20 21:43:01'),
(9, 20, 2, '2020-06-20 22:03:58', '2020-06-20 23:52:29'),
(10, 21, 3, '2020-06-24 12:47:22', '2020-06-24 12:47:22'),
(11, 22, 3, '2020-06-24 12:52:28', '2020-06-24 12:52:28'),
(12, 23, 3, '2020-06-24 12:55:26', '2020-06-24 12:55:26'),
(13, 24, 4, '2020-06-24 18:31:51', '2020-06-24 18:31:51'),
(14, 25, 5, '2020-06-24 18:33:18', '2020-06-24 18:33:18'),
(15, 26, 2, '2020-06-24 18:34:25', '2020-06-24 18:34:25'),
(16, 27, 3, '2020-06-24 23:25:36', '2020-06-24 23:25:36'),
(17, 28, 4, '2020-06-24 23:36:16', '2020-06-24 23:36:16'),
(18, 29, 5, '2020-06-26 22:10:46', '2020-06-26 22:10:46'),
(19, 31, 3, '2020-06-28 20:13:02', '2020-06-28 20:13:02'),
(20, 32, 3, '2020-06-28 20:19:14', '2020-06-28 20:19:14'),
(21, 33, 5, '2020-06-28 22:03:22', '2020-06-28 22:03:22'),
(22, 34, 5, '2020-06-28 22:05:08', '2020-06-28 22:05:08'),
(23, 35, 5, '2020-06-28 22:13:41', '2020-06-28 22:13:41'),
(24, 36, 3, '2020-06-28 22:18:46', '2020-06-28 22:18:46'),
(25, 37, 5, '2020-06-28 22:30:16', '2020-06-28 22:30:16'),
(26, 38, 4, '2020-07-01 09:28:33', '2020-07-01 09:28:33'),
(27, 39, 1, '2020-07-01 11:54:09', '2020-07-01 11:54:09');

-- --------------------------------------------------------

--
-- Структура таблицы `deliveries`
--

CREATE TABLE `deliveries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(26, '2014_10_12_000000_create_users_table', 1),
(27, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(28, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(29, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(30, '2016_06_01_000004_create_oauth_clients_table', 1),
(31, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(32, '2019_08_19_000000_create_failed_jobs_table', 1),
(33, '2020_06_03_115440_create_products_table', 1),
(34, '2020_06_06_170320_create_currencies_table', 2),
(35, '2020_06_07_140004_create_categories_table', 3),
(36, '2020_06_09_131139_create_statuses_table', 4),
(37, '2020_06_18_135843_create_customers_table', 5),
(38, '2020_06_18_140310_create_order_products_table', 5),
(39, '2020_06_18_140344_create_customer_orders_table', 5),
(40, '2020_06_18_140926_create_orders_table', 5),
(41, '2020_06_18_175739_create_deliveries_table', 5),
(42, '2020_06_27_211150_create_connections_table', 6);

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci,
  `utm_source` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utm_medium` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utm_term` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utm_content` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utm_campaign` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_id` int(11) DEFAULT NULL,
  `waybill` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sent` date DEFAULT NULL,
  `ip` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_3` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `additional_field_4` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `total_price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `status_id`, `comment`, `utm_source`, `utm_medium`, `utm_term`, `utm_content`, `utm_campaign`, `delivery_id`, `waybill`, `address`, `sent`, `ip`, `website`, `additional_field_1`, `additional_field_2`, `additional_field_3`, `additional_field_4`, `created_at`, `updated_at`, `total_price`) VALUES
(10, 1, 4, 'test comment', 'test_source', 'test_medium', 'test_term', 'test_content', 'test_campaign', 1, '241515125', 'Test Address', NULL, NULL, NULL, '1', '2', '3', '4', '2020-06-18 21:11:15', '2020-06-24 23:36:47', 4251),
(12, 1, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-18 21:30:25', '2020-06-18 21:30:25', 699),
(13, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-20 20:42:42', '2020-06-20 20:42:42', 2470),
(14, 1, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-20 20:47:49', '2020-06-24 23:36:40', 699),
(15, 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-20 21:40:22', '2020-06-20 21:40:22', 678),
(16, 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-20 21:42:06', '2020-06-20 23:52:55', 888),
(17, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-20 21:43:01', '2020-06-20 21:43:01', 888),
(20, 2, 2, 'test', 'test', 'test', 'test', 'test', 'test', 1, NULL, NULL, NULL, NULL, NULL, '1', '2', '3', '4', '2020-06-20 22:03:58', '2020-06-20 23:52:29', 675),
(21, 3, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-24 12:47:22', '2020-06-24 12:47:22', 3996),
(22, 3, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-05-24 12:52:28', '2020-06-24 12:52:28', 4940),
(23, 3, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-05-24 12:55:26', '2020-06-24 12:55:26', 2123),
(24, 4, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-04-24 18:31:51', '2020-06-24 18:31:51', 1913.96),
(25, 5, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-04-24 18:33:18', '2020-06-24 18:33:24', 1024),
(26, 2, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-04-24 18:34:25', '2020-06-24 18:34:25', 2221.28),
(27, 3, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-25 00:25:36', '2020-06-24 23:25:36', 422),
(28, 4, 4, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-03-25 00:36:16', '2020-06-24 23:36:16', 2034),
(29, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-06-26 22:10:46', '2020-06-26 22:10:46', 888),
(31, 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, 'http://test.landing/', '1', '2', '2', '3', '2020-06-28 20:13:02', '2020-06-28 20:13:02', 1200),
(32, 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '81.240.94.8', 'http://test.landing/', '1', '2', '2', '3', '2020-06-28 20:19:14', '2020-06-28 20:19:14', 1200),
(33, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '81.240.94.8', 'http://test.landing/', '1', '2', '2', '3', '2020-06-28 22:03:22', '2020-06-28 22:03:22', 1200),
(34, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '81.240.94.8', 'http://test.landing/', '1', '2', '2', '3', '2020-06-28 22:05:08', '2020-06-28 22:05:08', 1200),
(35, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '81.240.94.8', 'http://test.landing/', '1', '2', '2', '3', '2020-06-28 22:13:41', '2020-06-28 22:13:41', 1200),
(36, 3, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '81.240.94.8', 'http://test.landing/', '1', '2', '2', '3', '2020-06-28 22:18:46', '2020-06-28 22:18:46', 1200),
(37, 5, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '81.240.94.8', 'http://test.landing/', 'test 1', 'test 2', 'test 3', 'test 4', '2020-06-28 22:30:16', '2020-06-28 22:30:16', 1200),
(38, 4, 2, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-01 09:28:33', '2020-07-01 09:28:33', 1455),
(39, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-01 11:54:09', '2020-07-01 11:54:09', 854);

-- --------------------------------------------------------

--
-- Структура таблицы `order_products`
--

CREATE TABLE `order_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double(8,2) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `order_products`
--

INSERT INTO `order_products` (`id`, `order_id`, `product_id`, `price`, `amount`, `created_at`, `updated_at`) VALUES
(3, 10, 12, 699.00, 1, '2020-06-18 21:11:15', '2020-06-18 21:11:15'),
(4, 10, 16, 888.00, 4, '2020-06-18 21:11:15', '2020-06-18 21:11:15'),
(5, 12, 12, 699.00, 1, '2020-06-18 21:30:25', '2020-06-18 21:30:25'),
(6, 13, 5, 1235.00, 2, '2020-06-20 20:42:42', '2020-06-20 20:42:42'),
(7, 14, 12, 699.00, 1, '2020-06-20 20:47:49', '2020-06-20 20:47:49'),
(8, 15, 13, 678.00, 1, '2020-06-20 21:40:22', '2020-06-20 21:40:22'),
(9, 16, 16, 888.00, 1, '2020-06-20 21:42:06', '2020-06-20 21:42:06'),
(10, 17, 16, 888.00, 1, '2020-06-20 21:43:01', '2020-06-20 21:43:01'),
(23, 20, 16, 444.00, 1, '2020-06-20 23:51:03', '2020-06-20 23:51:03'),
(24, 20, 13, 231.00, 1, '2020-06-20 23:51:03', '2020-06-20 23:51:03'),
(25, 21, 12, 999.00, 4, '2020-06-24 12:47:22', '2020-06-24 12:47:22'),
(26, 22, 5, 1235.00, 4, '2020-06-24 12:52:28', '2020-06-24 12:52:28'),
(27, 23, 12, 888.00, 1, '2020-06-24 12:55:26', '2020-06-24 12:55:26'),
(28, 23, 5, 1235.00, 1, '2020-06-24 12:55:26', '2020-06-24 12:55:26'),
(29, 24, 10, 124.00, 2, '2020-06-24 18:31:51', '2020-06-24 18:31:51'),
(30, 24, 11, 555.32, 3, '2020-06-24 18:31:51', '2020-06-24 18:31:51'),
(31, 25, 9, 512.00, 2, '2020-06-24 18:33:18', '2020-06-24 18:33:18'),
(32, 26, 7, 555.32, 4, '2020-06-24 18:34:25', '2020-06-24 18:34:25'),
(33, 27, 4, 211.00, 2, '2020-06-24 23:25:36', '2020-06-24 23:25:36'),
(34, 28, 14, 678.00, 3, '2020-06-24 23:36:16', '2020-06-24 23:36:16'),
(35, 29, 3, 888.00, 1, '2020-06-26 22:10:46', '2020-06-26 22:10:46'),
(36, 31, 14, 1200.00, 1, '2020-06-28 20:13:02', '2020-06-28 20:13:02'),
(37, 32, 14, 1200.00, 1, '2020-06-28 20:19:14', '2020-06-28 20:19:14'),
(38, 33, 14, 1200.00, 1, '2020-06-28 22:03:22', '2020-06-28 22:03:22'),
(39, 34, 14, 1200.00, 1, '2020-06-28 22:05:08', '2020-06-28 22:05:08'),
(40, 35, 14, 1200.00, 1, '2020-06-28 22:13:41', '2020-06-28 22:13:41'),
(41, 36, 14, 1200.00, 1, '2020-06-28 22:18:46', '2020-06-28 22:18:46'),
(42, 37, 10, 333.00, 1, '2020-06-28 22:30:16', '2020-06-28 22:30:16'),
(43, 38, 13, 678.00, 1, '2020-07-01 09:28:33', '2020-07-01 09:28:33'),
(44, 38, 12, 777.00, 1, '2020-07-01 09:28:33', '2020-07-01 09:28:33'),
(45, 39, 15, 854.00, 1, '2020-07-01 11:54:09', '2020-07-01 11:54:09');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `model` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `weight` double(8,2) DEFAULT NULL,
  `length` double(8,2) DEFAULT NULL,
  `width` double(8,2) DEFAULT NULL,
  `height` double(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `model`, `photo`, `currency_id`, `amount`, `price`, `description`, `weight`, `length`, `width`, `height`, `created_at`, `updated_at`) VALUES
(1, 'Test Product', NULL, NULL, NULL, 2, 1, 555.32, NULL, NULL, NULL, NULL, NULL, '2020-06-03 14:05:46', '2020-06-12 16:14:57'),
(2, 'Test Product', 2, 'Test model', NULL, 2, 42, 4436.00, 'teastasta', 532.00, 33.00, 44.00, 22.00, '2020-06-03 21:00:35', '2020-06-03 21:00:35'),
(3, 'Test Product 3', NULL, NULL, '1591225543.png', 3, 0, 678.00, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-03 21:05:43', '2020-06-03 21:05:43'),
(4, 'Test Product 4', NULL, NULL, '1591225704.png', 1, -1, 211.00, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-03 21:08:25', '2020-06-24 23:25:36'),
(5, 'New Product', 3, 'Test model', '1591297168.png', 2, 53, 1235.00, '6sdfsdgsdgedsfe', 33.00, 24.00, 33.00, 55.00, '2020-06-04 16:59:29', '2020-06-24 12:55:26'),
(6, 'New Product 2', 2, 'Test model', NULL, 3, 0, 555.32, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-04 20:56:31', '2020-06-04 20:56:31'),
(7, 'Test Product 7', NULL, NULL, NULL, 2, -1, 555.32, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-04 21:00:39', '2020-06-24 18:34:25'),
(8, 'New Product 3', NULL, NULL, NULL, 3, 0, 666.00, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-04 21:02:16', '2020-06-04 21:02:16'),
(9, 'New Product 4', NULL, NULL, NULL, 2, 0, 512.00, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-04 21:03:17', '2020-06-04 21:03:17'),
(10, 'Test Product 5', NULL, NULL, NULL, 2, -1, 124.00, NULL, 1.00, 0.00, 0.00, 0.00, '2020-06-04 21:07:06', '2020-06-24 18:31:51'),
(11, 'Phone', 1, NULL, 'product-11-1593525068.png', 2, -1, 555.32, NULL, 1.00, NULL, NULL, NULL, '2020-06-05 19:46:05', '2020-06-30 11:51:08'),
(12, 'Book', NULL, NULL, 'product-12-1593525060.png', 2, 30, 777.00, NULL, 1.00, NULL, NULL, NULL, '2020-06-05 19:49:28', '2020-06-30 11:51:00'),
(13, 'Macbook', NULL, NULL, 'product-13-1593525051.jpeg', 3, 4, 678.00, NULL, 1.00, NULL, NULL, NULL, '2020-06-05 19:55:04', '2020-06-30 11:51:33'),
(14, 'Tablet', NULL, NULL, 'product-14-1593525044.jpeg', 3, 21, 678.00, NULL, 1.00, NULL, NULL, NULL, '2020-06-05 19:56:49', '2020-06-30 11:51:23'),
(15, 'Laptop', 1, NULL, 'product-15-1593525038.jpeg', 1, 1, 854.00, NULL, 1.00, NULL, NULL, NULL, '2020-06-05 19:57:59', '2020-06-30 11:51:17'),
(16, 'New Product 88', 4, 'New PC', '', 1, 13, 888.00, NULL, 1.00, 15.00, 44.00, 25.00, '2020-06-12 16:27:23', '2020-06-12 16:27:23');

-- --------------------------------------------------------

--
-- Структура таблицы `statuses`
--

CREATE TABLE `statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `colorText` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locked` tinyint(1) NOT NULL,
  `order` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `statuses`
--

INSERT INTO `statuses` (`id`, `name`, `color`, `colorText`, `locked`, `order`, `created_at`, `updated_at`) VALUES
(1, 'New', '#db2828', '#fff', 1, '1', NULL, NULL),
(2, 'Accepted', '#21ba45', '#fff', 1, '2', NULL, NULL),
(3, 'Sent', '#fbbd08', '#000000', 1, '3', NULL, '2020-06-14 22:04:04'),
(4, 'Completed', '#388e3c', '#fff', 1, '4', NULL, NULL),
(5, 'Rejection', '#e03997', '#fff', 1, '5', NULL, NULL),
(6, 'test', '#000000', '#d9d9d9', 0, '6', '2020-06-11 17:40:20', '2020-06-11 20:15:06'),
(7, 'new test', '#512da8', '#ffffff', 0, '7', '2020-06-11 18:00:40', '2020-06-22 11:21:52'),
(8, 'test2', '#e64a19', '#ffffff', 0, '8', '2020-06-11 20:15:25', '2020-06-27 14:01:42'),
(9, 'test33', '#1976d2', '#fff', 0, '9', '2020-06-11 20:16:18', '2020-06-11 20:16:37');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Klim Skliarov', 'klim.sk88@gmail.com', NULL, '$2y$10$xwyM25aFKRc.HvvRCwDKi.t5lcJJ6wJVcRS22b7sPJrfYunF7LtAC', NULL, '2020-06-03 14:05:26', '2020-06-03 14:05:26');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `connections`
--
ALTER TABLE `connections`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_phone_unique` (`phone`);

--
-- Индексы таблицы `customer_orders`
--
ALTER TABLE `customer_orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Индексы таблицы `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Индексы таблицы `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Индексы таблицы `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `connections`
--
ALTER TABLE `connections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `customer_orders`
--
ALTER TABLE `customer_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT для таблицы `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT для таблицы `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT для таблицы `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
