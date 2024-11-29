-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 02:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE `contents` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `module_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contents`
--

INSERT INTO `contents` (`id`, `title`, `description`, `module_id`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'React Basics', 'Learn the fundamentals of React.js.', 1, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(2, 'Building REST APIs', 'Learn how to create RESTful APIs.', 2, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(3, 'SQL Queries', 'Master SQL for data retrieval.', 3, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(4, 'Docker Basics', 'Introduction to Docker and containers.', 4, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(5, 'Figma for Beginners', 'Learn Figma for UI/UX design.', 5, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(6, 'Data Cleaning Techniques', 'Clean messy datasets effectively.', 6, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(7, 'Introduction to Neural Networks', 'Learn basic concepts of neural networks.', 7, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(8, 'Network Security Basics', 'Learn to secure networks.', 8, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(9, 'Building Flutter Apps', 'Create cross-platform mobile apps.', 9, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(10, 'Agile Project Management', 'Introduction to Agile methodologies.', 10, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(11, 'Advanced React Patterns', 'Dive deep into React design patterns.', 1, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(12, 'Authentication with JWT', 'Learn secure user authentication.', 2, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(13, 'Database Optimization', 'Techniques to optimize databases.', 3, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(14, 'Kubernetes Basics', 'Introduction to Kubernetes.', 4, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(15, 'Adobe XD Essentials', 'Get started with Adobe XD for design.', 5, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(16, 'Data Visualization with Python', 'Create visualizations using Python.', 6, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(17, 'Deep Learning with TensorFlow', 'Advanced machine learning with TensorFlow.', 7, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(18, 'Ethical Hacking Basics', 'Learn the basics of ethical hacking.', 8, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(19, 'iOS Development with Swift', 'Learn to build iOS apps using Swift.', 9, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(20, 'Scrum in Practice', 'Real-world Scrum applications.', 10, 1, '2024-11-27 04:23:26', '2024-11-27 04:23:26'),
(26, 'kjhkjbmn mnbmn', 'Test the server to be ready for deployment', 8, 1, '2024-11-29 03:42:53', '2024-11-29 03:42:53'),
(30, 'Technical Server Security', 'Test the server to be ready', 8, 1, '2024-11-29 12:02:45', '2024-11-29 12:03:34');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `description`) VALUES
(1, 'Frontend Development', 'Learn modern frontend technologies.'),
(2, 'Backend Development', 'Master server-side programming.'),
(3, 'Database Management', 'Understand database design and queries.'),
(4, 'DevOps', 'Learn CI/CD and cloud deployment.'),
(5, 'UI/UX Design', 'Design user-friendly interfaces.'),
(6, 'Data Science', 'Explore data analysis and visualization.'),
(7, 'AI & Machine Learning', 'Introduction to AI concepts.'),
(8, 'Cybersecurity', 'Learn about securing systems.'),
(9, 'Mobile Development', 'Build apps for Android and iOS.'),
(10, 'Project Management', 'Master project planning and execution.');

-- --------------------------------------------------------

--
-- Table structure for table `participant_scores`
--

CREATE TABLE `participant_scores` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_id` int(11) NOT NULL,
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `participant_scores`
--

INSERT INTO `participant_scores` (`id`, `user_id`, `content_id`, `score`) VALUES
(1, 2, 1, 85.5),
(2, 2, 2, 92),
(3, 3, 3, 78.5),
(4, 3, 4, 88),
(5, 4, 5, 95),
(6, 5, 6, 82.5),
(7, 6, 7, 89),
(8, 7, 8, 93),
(9, 8, 9, 80),
(10, 9, 10, 85.5),
(11, 10, 1, 91),
(12, 11, 2, 75),
(13, 12, 3, 88.5),
(14, 13, 4, 83),
(15, 14, 5, 86),
(16, 15, 6, 92),
(17, 16, 7, 90),
(18, 17, 8, 88),
(19, 18, 9, 79.5),
(20, 19, 10, 87),
(21, 20, 1, 85),
(22, 20, 2, 89),
(23, 2, 3, 91),
(24, 3, 4, 93),
(25, 4, 5, 77),
(26, 5, 6, 85.5),
(27, 6, 7, 88.5),
(28, 7, 8, 90),
(29, 8, 9, 92),
(30, 9, 10, 89.5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','participant') DEFAULT 'participant',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Admin User', 'admin@lms.com', 'hashed_password', 'admin', '2024-11-27 04:23:26'),
(2, 'John Doe', 'john.doe@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(3, 'Jane Smith', 'jane.smith@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(4, 'Alice Johnson', 'alice.johnson@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(5, 'Bob Brown', 'bob.brown@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(6, 'Chris Davis', 'chris.davis@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(7, 'Dana White', 'dana.white@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(8, 'Eve Black', 'eve.black@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(9, 'Frank Moore', 'frank.moore@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(10, 'Grace Lee', 'grace.lee@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(11, 'Hank Green', 'hank.green@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(12, 'Ivy Adams', 'ivy.adams@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(13, 'Jack Hill', 'jack.hill@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(14, 'Kara King', 'kara.king@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(15, 'Liam Scott', 'liam.scott@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(16, 'Mona White', 'mona.white@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(17, 'Nina Black', 'nina.black@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(18, 'Owen Hall', 'owen.hall@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(19, 'Paul Harris', 'paul.harris@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(20, 'Quinn Walker', 'quinn.walker@example.com', 'hashed_password', 'participant', '2024-11-27 04:23:26'),
(21, 'mamat ackerman', 'mamat@gmail.com', '$2b$10$r840VUPtdWlWnUaP658Oa.6/2RI5/lkKuMWhuj17PddLVkZgNZaxS', 'admin', '2024-11-27 04:50:43'),
(22, 'Draken kun', 'drakun@djakfj.s', '$2b$10$b9MpfceXHQYzfzerQeBtqObRX7pw.3DhhkOcvDQe02EddlU1F33Ye', 'participant', '2024-11-28 03:35:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `module_id` (`module_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `participant_scores`
--
ALTER TABLE `participant_scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `content_id` (`content_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contents`
--
ALTER TABLE `contents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `participant_scores`
--
ALTER TABLE `participant_scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contents`
--
ALTER TABLE `contents`
  ADD CONSTRAINT `contents_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`),
  ADD CONSTRAINT `contents_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `participant_scores`
--
ALTER TABLE `participant_scores`
  ADD CONSTRAINT `participant_scores_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `participant_scores_ibfk_2` FOREIGN KEY (`content_id`) REFERENCES `contents` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
