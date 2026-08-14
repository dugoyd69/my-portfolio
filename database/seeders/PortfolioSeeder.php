<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // Clear existing (idempotent re-seed)
        DB::table('project_technologies')->delete();
        DB::table('skill_technologies')->delete();
        DB::table('project_images')->delete();
        DB::table('projects')->delete();
        DB::table('skills')->delete();
        DB::table('technologies')->delete();

        DB::table('technologies')->insert([
            ['id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d', 'name' => 'React', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => '529eca3b-6273-48c5-b7aa-d492d44779b0', 'name' => 'Laravel', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T07:46:49.45436+00:00', 'updated_at' => '2025-12-21T07:46:49.45436+00:00'],
            ['id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd', 'name' => 'Bootstrap', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T07:46:49.759712+00:00', 'updated_at' => '2025-12-21T07:46:49.759712+00:00'],
            ['id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f', 'name' => 'WordPress', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:05:17.129887+00:00', 'updated_at' => '2025-12-21T09:05:17.129887+00:00'],
            ['id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0', 'name' => 'Cloudways', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:05:17.979425+00:00', 'updated_at' => '2025-12-21T09:05:17.979425+00:00'],
            ['id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10', 'name' => 'Elementor', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:05:18.427907+00:00', 'updated_at' => '2025-12-21T09:05:18.427907+00:00'],
            ['id' => '06b26928-f8a3-4241-9a2f-9432cd9ae9db', 'name' => 'Inertia', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:15:39.537066+00:00', 'updated_at' => '2025-12-21T09:15:39.537066+00:00'],
            ['id' => 'a5e45673-7c5d-4ae0-9cf8-9e0cfcebc95d', 'name' => 'Vite', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:15:39.79317+00:00', 'updated_at' => '2025-12-21T09:15:39.79317+00:00'],
            ['id' => 'eb2d3ae7-140a-407b-98e2-7264d91811a3', 'name' => 'Flutter', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:16:49.491753+00:00', 'updated_at' => '2025-12-21T09:16:49.491753+00:00'],
            ['id' => '3bc1bfdb-387c-4ab3-8cb6-fdb8a77625c5', 'name' => 'n8n', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:16:50.498209+00:00', 'updated_at' => '2025-12-21T09:16:50.498209+00:00'],
            ['id' => 'a2c0d37c-11d7-498a-bf64-34625904818b', 'name' => 'Vercel', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:22:26.888017+00:00', 'updated_at' => '2025-12-21T09:22:26.888017+00:00'],
            ['id' => '23d4325c-f9ba-4cbe-93dc-87594974ebc2', 'name' => 'Supabase', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T09:22:27.167333+00:00', 'updated_at' => '2025-12-21T09:22:27.167333+00:00'],
            ['id' => 'dca0e83a-65fd-4c4b-a894-34486f5a58ee', 'name' => 'Vue.js', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T12:29:02.585703+00:00', 'updated_at' => '2025-12-21T12:29:02.585703+00:00'],
            ['id' => '4c37bbac-4f88-4c5b-bedb-acf319f19e96', 'name' => 'Tailwind CSS', 'domain' => null, 'icon_url' => null, 'created_at' => '2025-12-21T12:29:03.034248+00:00', 'updated_at' => '2025-12-21T12:29:03.034248+00:00'],
            ['id' => 'dd56bcaa-74e8-4ca5-b78c-24713b2551b6', 'name' => 'AWS', 'domain' => 'aws.amazon.com', 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => 'e29c9765-db93-42f2-8650-1bde9884e102', 'name' => 'Builder.io', 'domain' => 'www.builder.io', 'icon_url' => null, 'created_at' => '2025-12-21T09:09:59.427908+00:00', 'updated_at' => '2025-12-21T09:09:59.427908+00:00'],
            ['id' => '72a7b425-d1e9-4e30-ad2c-54ab1fcec89c', 'name' => 'Docker', 'domain' => 'www.docker.com', 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => '4fa69982-f44d-4d7d-8ba9-3268151380e7', 'name' => 'Figma', 'domain' => 'www.figma.com', 'icon_url' => null, 'created_at' => '2025-12-21T09:09:59.111394+00:00', 'updated_at' => '2025-12-21T09:09:59.111394+00:00'],
            ['id' => 'b7fc2705-6083-48e2-90c8-4d8cf316d295', 'name' => 'Flutterflow', 'domain' => 'www.flutterflow.io', 'icon_url' => null, 'created_at' => '2025-12-21T09:16:49.889028+00:00', 'updated_at' => '2025-12-21T09:16:49.889028+00:00'],
            ['id' => 'c6b746b8-0693-4a68-8c24-5e543720124a', 'name' => 'GitHub Actions', 'domain' => 'github.com', 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92', 'name' => 'Jquery', 'domain' => 'jquery.com', 'icon_url' => null, 'created_at' => '2025-12-21T07:46:50.063645+00:00', 'updated_at' => '2025-12-21T07:46:50.063645+00:00'],
            ['id' => '5aa440aa-b236-4ec3-9ed2-865780797df4', 'name' => 'Lovable', 'domain' => 'lovable.dev', 'icon_url' => null, 'created_at' => '2025-12-21T09:09:59.727344+00:00', 'updated_at' => '2025-12-21T09:09:59.727344+00:00'],
            ['id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb', 'name' => 'Mysql', 'domain' => 'www.mysql.com', 'icon_url' => null, 'created_at' => '2025-12-21T07:46:50.349678+00:00', 'updated_at' => '2025-12-21T07:46:50.349678+00:00'],
            ['id' => 'a32d03f3-9185-4390-a0a3-05ed238915fa', 'name' => 'Node.js', 'domain' => 'nodejs.org', 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8', 'name' => 'PHP', 'domain' => 'www.php.net', 'icon_url' => null, 'created_at' => '2025-12-21T09:05:17.528659+00:00', 'updated_at' => '2025-12-21T09:05:17.528659+00:00'],
            ['id' => '09ddb5d6-83ac-4039-950b-ca1c5693a7a6', 'name' => 'Python', 'domain' => 'www.python.org', 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => 'e5350a60-c05e-4958-b969-c7ce1187c356', 'name' => 'Typscript', 'domain' => 'www.typescriptlang.org', 'icon_url' => null, 'created_at' => '2025-12-21T12:29:01.662451+00:00', 'updated_at' => '2025-12-21T12:29:01.662451+00:00'],
            ['id' => '6db8751d-985b-459c-839d-4d4e0c83e382', 'name' => 'WebSocket', 'domain' => 'websocket.org', 'icon_url' => null, 'created_at' => '2025-12-21T05:31:02.440337+00:00', 'updated_at' => '2025-12-21T05:31:02.440337+00:00'],
            ['id' => '0a5eb162-eec6-4658-8021-87614bf45213', 'name' => 'NativePHP', 'domain' => 'nativephp.com', 'icon_url' => null, 'created_at' => '2025-12-21T13:29:17.436226+00:00', 'updated_at' => '2025-12-21T13:29:17.436226+00:00'],
            ['id' => '6b47b220-2ffc-42f0-bfe0-b6fbe51cd935', 'name' => 'Adalo', 'domain' => 'www.adalo.com', 'icon_url' => null, 'created_at' => '2025-12-21T13:29:39.774776+00:00', 'updated_at' => '2025-12-21T13:29:39.774776+00:00'],
            ['id' => '900dcfd0-ab6c-44a4-9858-cdd3835f0ee7', 'name' => 'Gitlab', 'domain' => 'gitlab.com', 'icon_url' => null, 'created_at' => '2025-12-21T13:30:13.838823+00:00', 'updated_at' => '2025-12-21T13:30:13.838823+00:00'],
            ['id' => '1f4299f4-a28d-400e-9d2a-fabc139f9d8d', 'name' => 'Bitbucket', 'domain' => 'bitbucket.org', 'icon_url' => null, 'created_at' => '2025-12-21T13:30:38.36379+00:00', 'updated_at' => '2025-12-21T13:30:38.36379+00:00'],
            ['id' => 'fa6085b1-a655-4521-916b-51b7f1ddf1d1', 'name' => 'Woocommerce', 'domain' => 'woocommerce.com', 'icon_url' => null, 'created_at' => '2025-12-21T13:31:49.82941+00:00', 'updated_at' => '2025-12-21T13:31:49.82941+00:00'],
            ['id' => '13105e07-ab71-4291-81e0-85ef88ba2af1', 'name' => 'Google Tag Manager', 'domain' => 'https://google.com/', 'icon_url' => null, 'created_at' => '2025-12-21T13:42:15.888406+00:00', 'updated_at' => '2025-12-21T13:42:15.888406+00:00'],
            ['id' => '385d0518-d25d-455e-895c-c93d04aad78a', 'name' => 'Facebook Pixel', 'domain' => 'https://www.facebook.com/', 'icon_url' => null, 'created_at' => '2025-12-21T13:42:40.132418+00:00', 'updated_at' => '2025-12-21T13:42:40.132418+00:00'],
            ['id' => '55caca35-ba93-4d73-af95-bee33d14172b', 'name' => 'Burp Suite', 'domain' => 'portswigger.net', 'icon_url' => null, 'created_at' => '2025-12-21T13:56:37.346189+00:00', 'updated_at' => '2025-12-21T13:56:37.346189+00:00'],
            ['id' => '2b5ea7b4-7c34-4449-aff3-06ffd57ec1f5', 'name' => 'Kali', 'domain' => 'www.kali.org', 'icon_url' => null, 'created_at' => '2025-12-21T13:56:14.544849+00:00', 'updated_at' => '2025-12-21T13:56:14.544849+00:00'],
        ]);

        DB::table('skills')->insert([
            ['id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'title' => 'Development', 'description' => 'Full-stack web development with modern frameworks and best practices', 'icon_name' => 'Code2', 'display_order' => 1, 'created_at' => '2025-12-21T12:28:59.9676+00:00', 'updated_at' => '2025-12-21T12:28:59.9676+00:00'],
            ['id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'title' => 'CMS & Automations', 'description' => 'Building scalable content platforms and automated workflows', 'icon_name' => 'Workflow', 'display_order' => 2, 'created_at' => '2025-12-21T13:19:50.596872+00:00', 'updated_at' => '2025-12-21T13:19:50.596872+00:00'],
            ['id' => '14d619b8-1834-4737-bd42-90b50b331a4d', 'title' => 'Mobile Development', 'description' => 'Cross-platform mobile app development with modern tools', 'icon_name' => 'Smartphone', 'display_order' => 3, 'created_at' => '2025-12-21T13:20:18.766628+00:00', 'updated_at' => '2025-12-21T13:20:18.766628+00:00'],
            ['id' => '1c488f8c-ac25-4844-bb01-0eea56d57fb0', 'title' => 'Ethical Hacking', 'description' => 'Penetration testing and vulnerability assessment to secure systems', 'icon_name' => 'Shield', 'display_order' => 4, 'created_at' => '2025-12-21T13:20:48.333992+00:00', 'updated_at' => '2025-12-21T13:20:48.333992+00:00'],
            ['id' => '72f19b53-c777-4e41-b05f-d8c3062e7d9a', 'title' => 'Databases', 'description' => 'Database design, optimization, and management', 'icon_name' => 'Database', 'display_order' => 5, 'created_at' => '2025-12-21T13:21:15.857111+00:00', 'updated_at' => '2025-12-21T13:21:15.857111+00:00'],
            ['id' => '314ee489-30f4-4783-9636-b573d3acf4c5', 'title' => 'DevOps', 'description' => 'Streamlined deployment and infrastructure management', 'icon_name' => 'Terminal', 'display_order' => 6, 'created_at' => '2025-12-21T13:21:57.012359+00:00', 'updated_at' => '2025-12-21T13:21:57.012359+00:00'],
        ]);

        DB::table('projects')->insert([
            ['id' => '6865b0c4-65d1-42af-ba48-1f598ca3aa96', 'title' => 'Figma to React.js Conversion – Website 2', 'description' => 'Converted a client’s Figma design into a React.js website. This was my first project where I applied AI-assisted tools as requested by the client, using a workflow of Figma → Builder.io → Lovable → Windsurf IDE for local development.', 'image_url' => '/img/portfolio/Ben_Project2.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:10:20.550174+00:00', 'updated_at' => '2025-12-21T09:10:20.550174+00:00'],
            ['id' => '44eacc1b-5524-4f2e-a654-be6c469206d4', 'title' => 'Owen Cope - WordPress Website', 'description' => 'Built a client’s marketing website on WordPress using Elementor, delivering a clean, responsive design tailored for brand promotion and lead generation.', 'image_url' => '/img/portfolio/owencope.com.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://owencope.com/', 'created_at' => '2025-12-21T09:11:08.186346+00:00', 'updated_at' => '2025-12-21T09:11:08.186346+00:00'],
            ['id' => '6394e3e5-00be-49e3-b991-43205a9412f4', 'title' => 'Scholarsight', 'description' => 'My first client base project, student requested this one.', 'image_url' => '/img/portfolio/Scholarsight.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T08:01:24.95792+00:00', 'updated_at' => '2025-12-21T08:01:24.95792+00:00'],
            ['id' => 'aa558306-5196-4694-8f34-7c5e885c18c3', 'title' => 'Kumo-soft', 'description' => 'This is my first marketing website I build using Laravel, Jquery, Mysql and Bootstrap.', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_154348.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://www.kumo-soft.com/', 'created_at' => '2025-12-21T07:46:48.960641+00:00', 'updated_at' => '2025-12-21T07:46:48.960641+00:00'],
            ['id' => '328e31fa-b682-4a37-90a0-682ab6d83108', 'title' => 'Debt Store System', 'description' => 'A full system', 'image_url' => '/img/portfolio/DebtStore.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T08:50:36.195553+00:00', 'updated_at' => '2025-12-21T08:50:36.195553+00:00'],
            ['id' => '1e537490-7217-413b-8df5-31a1fecb83cb', 'title' => 'First Portfolio Website', 'description' => 'First Portlfio I made made with PHP', 'image_url' => '/img/portfolio/Portfolio.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://dugoyd.html-5.me/?i=1#portfolio', 'created_at' => '2025-12-21T08:52:03.232878+00:00', 'updated_at' => '2025-12-21T08:52:03.232878+00:00'],
            ['id' => 'db8625c6-eb00-4741-a7d4-aaa95e7092d9', 'title' => 'DTR (Daily Time Record) / Pay Roll', 'description' => 'DTR is a comprehensive system developed using Laravel 5.4, Bootstrap 4, jQuery, HTML, CSS, JavaScript, and PHP 5.6. It encompasses multiple roles, authentication, CRUD operations, and features interactive graphs and charts, especially tailored for superadmins.', 'image_url' => '/img/portfolio/DTR.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T08:58:45.296218+00:00', 'updated_at' => '2025-12-21T08:58:45.296218+00:00'],
            ['id' => '895073dd-9815-4cb4-a3ca-3b243cd763c5', 'title' => 'KPACS', 'description' => 'KPACS is a specialized solution developed on Laravel 5.4, Bootstrap 4, jQuery, HTML, CSS, JavaScript, and PHP 5.6, leveraging the usbwserver8 for specific functionalities. The system caters to barangays, simplifying the recording of barangay cases.', 'image_url' => '/img/portfolio/KPACS.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T08:59:37.378941+00:00', 'updated_at' => '2025-12-21T08:59:37.378941+00:00'],
            ['id' => 'ed7a4f70-b62c-46f4-9367-2d23ff609e05', 'title' => 'ERBI', 'description' => 'ERBI is another barangay-centric system created with Laravel 5.4, Bootstrap 4, jQuery, HTML, CSS, JavaScript, and PHP 5.6. Similar to KPACS, it integrates usbwserver for specialized features and includes charts and graphs. ERBI serves as a census tool, streamlining the input of resident information for efficient population tracking.', 'image_url' => '/img/portfolio/ERBI.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:02:27.402631+00:00', 'updated_at' => '2025-12-21T09:02:27.402631+00:00'],
            ['id' => '850c662c-7659-4e2f-9310-2a6a63cbd6c7', 'title' => 'Gakkousoft (Benthel Asia of Technology)', 'description' => 'Gakkousoft (Benthel Asia of Technology) stands out as a Laravel 5.0 project, employing PHP 5.6, Bootstrap 3, jQuery, HTML, CSS, JavaScript, and various packages. This project marked a significant milestone in my career, serving as a platform to enhance my Laravel and PHP skills. Functioning as a school management system, it entailed a diverse set of responsibilities.', 'image_url' => '/img/portfolio/benthel.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:02:56.717838+00:00', 'updated_at' => '2025-12-21T09:02:56.717838+00:00'],
            ['id' => '219c9fb5-b01f-4ca3-ada7-f8604abd62ce', 'title' => 'Gakkousoft (Bethany Christian School)', 'description' => 'Gakkousoft (Bethany Christian School) stands out as a Laravel 5.0 project, employing PHP 5.6, Bootstrap 3, jQuery, HTML, CSS, JavaScript, and various packages. This project marked a significant milestone in my career, serving as a platform to enhance my Laravel and PHP skills. Functioning as a school management system, it entailed a diverse set of responsibilities.', 'image_url' => '/img/portfolio/bethany.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:03:19.228774+00:00', 'updated_at' => '2025-12-21T09:03:19.228774+00:00'],
            ['id' => '1bec69ba-d5f3-4195-9ca1-120b7efddec6', 'title' => 'Gakkousoft (St. Paul Learning Center)', 'description' => 'Gakkousoft (St. Paul Learning Center) stands out as a Laravel 5.0 project, employing PHP 5.6, Bootstrap 3, jQuery, HTML, CSS, JavaScript, and various packages. This project marked a significant milestone in my career, serving as a platform to enhance my Laravel and PHP skills. Functioning as a school management system, it entailed a diverse set of responsibilities.', 'image_url' => '/img/portfolio/Stpaul.JPG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:03:49.635415+00:00', 'updated_at' => '2025-12-21T09:03:49.635415+00:00'],
            ['id' => 'e42a8272-93e2-4aba-aa0e-2fc02d6c3e16', 'title' => 'Clare Cope - WordPress Website', 'description' => 'Discover Clare Cope\'s world through a beautifully crafted WordPress website. Explore her products, learn about her journey, and get in touch effortlessly.', 'image_url' => '/img/portfolio/Clare_Cope.PNG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://clarecope.com/', 'created_at' => '2025-12-21T09:05:16.644553+00:00', 'updated_at' => '2025-12-21T09:05:16.644553+00:00'],
            ['id' => '69b7bd0e-2ff9-4b65-8e66-07f2e5c1b1e5', 'title' => 'Capability Development Solutions - WordPress Website', 'description' => 'Explore the synergy of Clare Cope and Owen Cope\'s expertise on the Capability Development Solutions website. From insightful company information to a direct line of communication, this WordPress project delivers both professionalism and functionality.', 'image_url' => '/img/portfolio/CDS.PNG', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://capabilitydevelopmentsolutions.com/', 'created_at' => '2025-12-21T09:06:49.854714+00:00', 'updated_at' => '2025-12-21T09:06:49.854714+00:00'],
            ['id' => '711720d4-0624-47fa-a984-657d82e30ad7', 'title' => 'Ping Post Lead Form Builder', 'description' => 'Contributed fixes to incomplete code implementations for Google Tag Manager and Facebook Pixel, ensuring proper event tracking and conversion accuracy. Focused on maintaining performance and clean separation between admin and form embedding functionalities.', 'image_url' => '/img/portfolio/image_2025_03_11T14_14_14_274Z.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:08:41.54376+00:00', 'updated_at' => '2025-12-21T09:08:41.54376+00:00'],
            ['id' => 'a8cb016f-37aa-47f1-ba3c-f0bd2548ed44', 'title' => 'Figma to React.js Conversion – Website 1', 'description' => 'Converted a client’s Figma design into a React.js website. This was my first project where I applied AI-assisted tools as requested by the client, using a workflow of Figma → Builder.io → Lovable → Windsurf IDE for local development.', 'image_url' => '/img/portfolio/Ben_Project3.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:09:58.794718+00:00', 'updated_at' => '2025-12-21T09:09:58.794718+00:00'],
            ['id' => '7d36eb70-a4bd-4bdc-a834-559c112ae3be', 'title' => 'Marketing Website Maintenance – WordPress', 'description' => 'Maintenance of a client’s WordPress marketing website, ensuring smooth performance, security updates, and plugin/theme management.', 'image_url' => '/img/portfolio/thoughtcode.co.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://thoughtcode.co', 'created_at' => '2025-12-21T09:13:13.864947+00:00', 'updated_at' => '2025-12-21T09:13:13.864947+00:00'],
            ['id' => 'a1607e73-3ce0-4a31-89c5-d857e8c95ec7', 'title' => 'Marketing Website Maintenance – WordPress', 'description' => ' Maintenance of a client’s WordPress marketing website, ensuring smooth performance, security updates, and plugin/theme management.', 'image_url' => '/img/portfolio/valuespendulum.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://valuespendulum.co', 'created_at' => '2025-12-21T09:14:16.058364+00:00', 'updated_at' => '2025-12-21T09:14:16.058364+00:00'],
            ['id' => 'd08c3a5d-f2f5-477c-8d5f-e7f593b59bc1', 'title' => 'Compass Tools – SaaS', 'description' => 'Started development of an internal tool platform for contractors and adjustors, envisioned to evolve into a SaaS product. Hired as Full Stack Developer, I proposed and implemented the stack (Laravel, React, Inertia, Vite, Supabase) to build a scalable foundation.', 'image_url' => '/img/portfolio/Compass_Tools.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:15:08.209333+00:00', 'updated_at' => '2025-12-21T09:15:08.209333+00:00'],
            ['id' => 'c0920275-86c5-4fa9-af33-8c63be7a74ac', 'title' => 'WalkDocs – Mobile App (Connected to Compass Tools)', 'description' => 'Mobile companion app for Compass Tools, built for contractors to document damages with photos and voice notes. Voice notes are processed using Deepgram for transcription and integrated with Supabase, n8n, and Discord for workflow automation.', 'image_url' => '/img/portfolio/66813f60-3a2d-4d1c-9bce-2bfd1714771c.jpg', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:16:49.097438+00:00', 'updated_at' => '2025-12-21T09:16:49.097438+00:00'],
            ['id' => '19b846f3-d6b4-4b5f-b9d3-2012802fcd70', 'title' => 'ScopeNote – Mobile App (MVP)', 'description' => 'Lightweight MVP mobile app designed for release on Play Store and App Store. Built to let users capture photos and add notes (memorable notes, contractor references, etc.).', 'image_url' => '/img/portfolio/369f8860-7d9a-4c93-9e1d-bba7fd3e7044.jpg', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:17:24.435802+00:00', 'updated_at' => '2025-12-21T09:17:24.435802+00:00'],
            ['id' => '705341fd-7272-4b7d-bac1-dc274fd5dcf5', 'title' => 'Kanzen Stock – Inventory & Warehouse Management (Personal Project)', 'description' => 'Personal project inspired by a real use case (for my sister). Designed as a multi-tenant warehouse and inventory management system with plans to deploy as a SaaS product. Built with Laravel, jQuery, and Bootstrap 5.', 'image_url' => '/img/portfolio/kanzen_stock_jquery_bootstrap_5.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:18:16.073888+00:00', 'updated_at' => '2025-12-21T09:18:16.073888+00:00'],
            ['id' => '4d65a802-5e42-4a23-acf8-0999ef0c839e', 'title' => 'Dugoyd Portfolio – Portfolio Builder', 'description' => 'Personal project to rebuild and modernize my portfolio. Unlike my old PHP/Bootstrap/jQuery version, this new portfolio system is designed as a portfolio builder with an admin dashboard for creating and managing the frontend portfolio. Built using Laravel, Vite, React, and Inertia.', 'image_url' => '/img/portfolio/portfolio_admin.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:18:57.197248+00:00', 'updated_at' => '2025-12-21T09:18:57.197248+00:00'],
            ['id' => '081eb770-049f-453a-b50e-62635b069e93', 'title' => 'ThoughtCode Platform – Consultant Dashboard & Microservices', 'description' => 'Consultant Dashboard (main hub) Multiple microservices (Individual, Talent Finder, Leader, Team, Organisational Capability Matrix, 360° Feedback) Category: Full Stack Development / SaaS / Microservices Status: Ongoing (In Progress)', 'image_url' => '/img/portfolio/tc_consutlant.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:19:34.617906+00:00', 'updated_at' => '2025-12-21T09:19:34.617906+00:00'],
            ['id' => '08e2713c-e7cf-4a6e-94f2-beb5ace5a279', 'title' => 'Values Pendulum', 'description' => 'Full Stack Developer on the Values Pendulum platform, built as a monolithic application with Consultant Dashboard and Assessment features combined.', 'image_url' => '/img/portfolio/vp.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => null, 'created_at' => '2025-12-21T09:20:01.123846+00:00', 'updated_at' => '2025-12-21T09:20:01.123846+00:00'],
            ['id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'title' => 'RentSnap', 'description' => 'WebApp for managing apartments, condos and rental properties.', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172848.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://rentsnap-dashboard.vercel.app/', 'created_at' => '2025-12-21T09:30:15.485514+00:00', 'updated_at' => '2025-12-21T09:30:15.485514+00:00'],
            ['id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'title' => 'AnonFeedback', 'description' => 'A safe space to share and discover authentic feedback about schools, companies, and everything in between.', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172432.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://anonfeedback-ph.vercel.app/', 'created_at' => '2025-12-21T09:27:06.693639+00:00', 'updated_at' => '2025-12-21T09:27:06.693639+00:00'],
            ['id' => 'f785b014-bd08-4fda-a72b-b8fbe0c5eae7', 'title' => 'PhiliFare', 'description' => 'Get accurate fare estimates for jeepneys, buses, taxis, tricycles, and more across the Philippines.', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172045.png', 'icon_name' => 'Code2', 'github_url' => null, 'live_url' => 'https://philifare.vercel.app/', 'created_at' => '2025-12-21T09:22:26.374454+00:00', 'updated_at' => '2025-12-21T09:22:26.374454+00:00'],
            ['id' => 'f21a0f75-72a3-4993-a4e7-b12f0eea6fb4', 'title' => 'Akropora Resorts Website', 'description' => 'Engineered a fully custom, mobile-optimized digital presence for a Philippine resort. The architecture focuses on seamless user experience (UX) and fast load times to maximize visitor retention and drive direct bookings.', 'image_url' => '/img/portfolio/Screenshot_2026-02-25_082201.png', 'icon_name' => 'Globe', 'github_url' => null, 'live_url' => 'https://akroporaresorts.ph/', 'created_at' => '2026-02-25T00:25:56.097405+00:00', 'updated_at' => '2026-02-25T00:25:56.097405+00:00'],
            ['id' => '5aa62dd3-2723-4d4c-8a1e-b77a8d2bdc80', 'title' => 'YatiRaThai', 'description' => 'Built a custom Laravel-powered, mobile-optimized digital platform for a Philippine motorcycle apparel brand, emphasizing performance, intuitive navigation, and a seamless user experience across devices.', 'image_url' => '/img/portfolio/Screenshot_2026-07-23_035107.png', 'icon_name' => 'BrainCircuit', 'github_url' => null, 'live_url' => 'https://yatirathai.com/', 'created_at' => '2026-07-22T19:53:07.859284+00:00', 'updated_at' => '2026-07-22T19:53:07.859284+00:00'],
        ]);

        DB::table('project_images')->insert([
            ['id' => '0fa08d52-9cb8-4a97-81a7-8b71cb4b67ce', 'project_id' => 'aa558306-5196-4694-8f34-7c5e885c18c3', 'image_url' => '/img/portfolio/kumosoft.JPG', 'created_at' => '2025-12-21T08:16:31.403411+00:00', 'updated_at' => '2025-12-21T08:16:31.403411+00:00'],
            ['id' => '3d97371d-1cc5-40c9-9b71-12288c250931', 'project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172900.png', 'created_at' => '2025-12-21T12:07:09.62932+00:00', 'updated_at' => '2025-12-21T12:07:09.62932+00:00'],
            ['id' => '6d728bf9-64e8-43e1-b406-ccd5a9973384', 'project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172907.png', 'created_at' => '2025-12-21T12:07:09.62932+00:00', 'updated_at' => '2025-12-21T12:07:09.62932+00:00'],
            ['id' => '65fd0940-bdc5-4b9f-a783-908c93247626', 'project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172913.png', 'created_at' => '2025-12-21T12:07:09.62932+00:00', 'updated_at' => '2025-12-21T12:07:09.62932+00:00'],
            ['id' => '9b307d2f-3ba6-46da-9b23-0fc736b0b47d', 'project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172923.png', 'created_at' => '2025-12-21T12:07:09.62932+00:00', 'updated_at' => '2025-12-21T12:07:09.62932+00:00'],
            ['id' => '2dfd25d4-3e59-4771-84ba-61e1f2f1447b', 'project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172448.png', 'created_at' => '2025-12-21T12:07:21.157899+00:00', 'updated_at' => '2025-12-21T12:07:21.157899+00:00'],
            ['id' => 'd043d5f9-ba1c-40f7-9ecc-e6314aa2c53e', 'project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172505.png', 'created_at' => '2025-12-21T12:07:21.157899+00:00', 'updated_at' => '2025-12-21T12:07:21.157899+00:00'],
            ['id' => '6c2612f6-c629-47ea-a168-5020399a13e5', 'project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172517.png', 'created_at' => '2025-12-21T12:07:21.157899+00:00', 'updated_at' => '2025-12-21T12:07:21.157899+00:00'],
            ['id' => '7979d1bb-10cc-4a52-abc6-11ca547732a4', 'project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172536.png', 'created_at' => '2025-12-21T12:07:21.157899+00:00', 'updated_at' => '2025-12-21T12:07:21.157899+00:00'],
            ['id' => '4ff626f7-ea3d-4542-bf58-e643c09fcf92', 'project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172614.png', 'created_at' => '2025-12-21T12:07:21.157899+00:00', 'updated_at' => '2025-12-21T12:07:21.157899+00:00'],
            ['id' => '16845b8f-91c9-48d6-b6fb-17d39cf20e92', 'project_id' => 'f785b014-bd08-4fda-a72b-b8fbe0c5eae7', 'image_url' => '/img/portfolio/Screenshot_2025-12-21_172106.png', 'created_at' => '2025-12-21T12:07:29.157974+00:00', 'updated_at' => '2025-12-21T12:07:29.157974+00:00'],
        ]);

        DB::table('skill_technologies')->insert([
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d'],
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => '06b26928-f8a3-4241-9a2f-9432cd9ae9db'],
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => 'dca0e83a-65fd-4c4b-a894-34486f5a58ee'],
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => '4c37bbac-4f88-4c5b-bedb-acf319f19e96'],
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['skill_id' => '1970bf5c-3fd5-4cfc-8c5f-5540634411fc', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['skill_id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'technology_id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f'],
            ['skill_id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'technology_id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10'],
            ['skill_id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'technology_id' => '3bc1bfdb-387c-4ab3-8cb6-fdb8a77625c5'],
            ['skill_id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'technology_id' => '13105e07-ab71-4291-81e0-85ef88ba2af1'],
            ['skill_id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'technology_id' => '385d0518-d25d-455e-895c-c93d04aad78a'],
            ['skill_id' => 'c591e84c-0d36-4d56-8b85-75fc6ae9c565', 'technology_id' => 'fa6085b1-a655-4521-916b-51b7f1ddf1d1'],
            ['skill_id' => '14d619b8-1834-4737-bd42-90b50b331a4d', 'technology_id' => 'b7fc2705-6083-48e2-90c8-4d8cf316d295'],
            ['skill_id' => '14d619b8-1834-4737-bd42-90b50b331a4d', 'technology_id' => 'eb2d3ae7-140a-407b-98e2-7264d91811a3'],
            ['skill_id' => '14d619b8-1834-4737-bd42-90b50b331a4d', 'technology_id' => '0a5eb162-eec6-4658-8021-87614bf45213'],
            ['skill_id' => '14d619b8-1834-4737-bd42-90b50b331a4d', 'technology_id' => '6b47b220-2ffc-42f0-bfe0-b6fbe51cd935'],
            ['skill_id' => '1c488f8c-ac25-4844-bb01-0eea56d57fb0', 'technology_id' => '55caca35-ba93-4d73-af95-bee33d14172b'],
            ['skill_id' => '1c488f8c-ac25-4844-bb01-0eea56d57fb0', 'technology_id' => '2b5ea7b4-7c34-4449-aff3-06ffd57ec1f5'],
            ['skill_id' => '72f19b53-c777-4e41-b05f-d8c3062e7d9a', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['skill_id' => '72f19b53-c777-4e41-b05f-d8c3062e7d9a', 'technology_id' => '23d4325c-f9ba-4cbe-93dc-87594974ebc2'],
            ['skill_id' => '314ee489-30f4-4783-9636-b573d3acf4c5', 'technology_id' => 'a2c0d37c-11d7-498a-bf64-34625904818b'],
            ['skill_id' => '314ee489-30f4-4783-9636-b573d3acf4c5', 'technology_id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0'],
            ['skill_id' => '314ee489-30f4-4783-9636-b573d3acf4c5', 'technology_id' => 'c6b746b8-0693-4a68-8c24-5e543720124a'],
            ['skill_id' => '314ee489-30f4-4783-9636-b573d3acf4c5', 'technology_id' => '900dcfd0-ab6c-44a4-9858-cdd3835f0ee7'],
            ['skill_id' => '314ee489-30f4-4783-9636-b573d3acf4c5', 'technology_id' => '1f4299f4-a28d-400e-9d2a-fabc139f9d8d'],
        ]);

        DB::table('project_technologies')->insert([
            ['project_id' => '6394e3e5-00be-49e3-b991-43205a9412f4', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '6394e3e5-00be-49e3-b991-43205a9412f4', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '6394e3e5-00be-49e3-b991-43205a9412f4', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '6394e3e5-00be-49e3-b991-43205a9412f4', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'aa558306-5196-4694-8f34-7c5e885c18c3', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => 'aa558306-5196-4694-8f34-7c5e885c18c3', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => 'aa558306-5196-4694-8f34-7c5e885c18c3', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => 'aa558306-5196-4694-8f34-7c5e885c18c3', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '328e31fa-b682-4a37-90a0-682ab6d83108', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '328e31fa-b682-4a37-90a0-682ab6d83108', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '328e31fa-b682-4a37-90a0-682ab6d83108', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '328e31fa-b682-4a37-90a0-682ab6d83108', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '1e537490-7217-413b-8df5-31a1fecb83cb', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '1e537490-7217-413b-8df5-31a1fecb83cb', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '1e537490-7217-413b-8df5-31a1fecb83cb', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '1e537490-7217-413b-8df5-31a1fecb83cb', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'db8625c6-eb00-4741-a7d4-aaa95e7092d9', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => 'db8625c6-eb00-4741-a7d4-aaa95e7092d9', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => 'db8625c6-eb00-4741-a7d4-aaa95e7092d9', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => 'db8625c6-eb00-4741-a7d4-aaa95e7092d9', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '895073dd-9815-4cb4-a3ca-3b243cd763c5', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '895073dd-9815-4cb4-a3ca-3b243cd763c5', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '895073dd-9815-4cb4-a3ca-3b243cd763c5', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '895073dd-9815-4cb4-a3ca-3b243cd763c5', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'ed7a4f70-b62c-46f4-9367-2d23ff609e05', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => 'ed7a4f70-b62c-46f4-9367-2d23ff609e05', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => 'ed7a4f70-b62c-46f4-9367-2d23ff609e05', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => 'ed7a4f70-b62c-46f4-9367-2d23ff609e05', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '850c662c-7659-4e2f-9310-2a6a63cbd6c7', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '850c662c-7659-4e2f-9310-2a6a63cbd6c7', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '850c662c-7659-4e2f-9310-2a6a63cbd6c7', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '850c662c-7659-4e2f-9310-2a6a63cbd6c7', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '219c9fb5-b01f-4ca3-ada7-f8604abd62ce', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '219c9fb5-b01f-4ca3-ada7-f8604abd62ce', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '219c9fb5-b01f-4ca3-ada7-f8604abd62ce', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '219c9fb5-b01f-4ca3-ada7-f8604abd62ce', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '1bec69ba-d5f3-4195-9ca1-120b7efddec6', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '1bec69ba-d5f3-4195-9ca1-120b7efddec6', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '1bec69ba-d5f3-4195-9ca1-120b7efddec6', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '1bec69ba-d5f3-4195-9ca1-120b7efddec6', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'e42a8272-93e2-4aba-aa0e-2fc02d6c3e16', 'technology_id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f'],
            ['project_id' => 'e42a8272-93e2-4aba-aa0e-2fc02d6c3e16', 'technology_id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8'],
            ['project_id' => 'e42a8272-93e2-4aba-aa0e-2fc02d6c3e16', 'technology_id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0'],
            ['project_id' => 'e42a8272-93e2-4aba-aa0e-2fc02d6c3e16', 'technology_id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10'],
            ['project_id' => '69b7bd0e-2ff9-4b65-8e66-07f2e5c1b1e5', 'technology_id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f'],
            ['project_id' => '69b7bd0e-2ff9-4b65-8e66-07f2e5c1b1e5', 'technology_id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8'],
            ['project_id' => '69b7bd0e-2ff9-4b65-8e66-07f2e5c1b1e5', 'technology_id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0'],
            ['project_id' => '69b7bd0e-2ff9-4b65-8e66-07f2e5c1b1e5', 'technology_id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10'],
            ['project_id' => '711720d4-0624-47fa-a984-657d82e30ad7', 'technology_id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8'],
            ['project_id' => '711720d4-0624-47fa-a984-657d82e30ad7', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '711720d4-0624-47fa-a984-657d82e30ad7', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '711720d4-0624-47fa-a984-657d82e30ad7', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'a8cb016f-37aa-47f1-ba3c-f0bd2548ed44', 'technology_id' => '4fa69982-f44d-4d7d-8ba9-3268151380e7'],
            ['project_id' => 'a8cb016f-37aa-47f1-ba3c-f0bd2548ed44', 'technology_id' => 'e29c9765-db93-42f2-8650-1bde9884e102'],
            ['project_id' => 'a8cb016f-37aa-47f1-ba3c-f0bd2548ed44', 'technology_id' => '5aa440aa-b236-4ec3-9ed2-865780797df4'],
            ['project_id' => '6865b0c4-65d1-42af-ba48-1f598ca3aa96', 'technology_id' => '4fa69982-f44d-4d7d-8ba9-3268151380e7'],
            ['project_id' => '6865b0c4-65d1-42af-ba48-1f598ca3aa96', 'technology_id' => 'e29c9765-db93-42f2-8650-1bde9884e102'],
            ['project_id' => '6865b0c4-65d1-42af-ba48-1f598ca3aa96', 'technology_id' => '5aa440aa-b236-4ec3-9ed2-865780797df4'],
            ['project_id' => '44eacc1b-5524-4f2e-a654-be6c469206d4', 'technology_id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f'],
            ['project_id' => '44eacc1b-5524-4f2e-a654-be6c469206d4', 'technology_id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8'],
            ['project_id' => '44eacc1b-5524-4f2e-a654-be6c469206d4', 'technology_id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0'],
            ['project_id' => '44eacc1b-5524-4f2e-a654-be6c469206d4', 'technology_id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10'],
            ['project_id' => '7d36eb70-a4bd-4bdc-a834-559c112ae3be', 'technology_id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f'],
            ['project_id' => '7d36eb70-a4bd-4bdc-a834-559c112ae3be', 'technology_id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8'],
            ['project_id' => '7d36eb70-a4bd-4bdc-a834-559c112ae3be', 'technology_id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0'],
            ['project_id' => '7d36eb70-a4bd-4bdc-a834-559c112ae3be', 'technology_id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10'],
            ['project_id' => 'a1607e73-3ce0-4a31-89c5-d857e8c95ec7', 'technology_id' => '8fd9081f-56eb-47fd-9701-61ae5c19d63f'],
            ['project_id' => 'a1607e73-3ce0-4a31-89c5-d857e8c95ec7', 'technology_id' => '966845af-f1c5-4e2a-ae29-03aa7a9e32b8'],
            ['project_id' => 'a1607e73-3ce0-4a31-89c5-d857e8c95ec7', 'technology_id' => '6712b391-4456-4cd9-a6c1-27fdcc4ad4f0'],
            ['project_id' => 'a1607e73-3ce0-4a31-89c5-d857e8c95ec7', 'technology_id' => '6de8bbf3-e9e7-4de6-a7f6-e436c0a93b10'],
            ['project_id' => 'd08c3a5d-f2f5-477c-8d5f-e7f593b59bc1', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => 'd08c3a5d-f2f5-477c-8d5f-e7f593b59bc1', 'technology_id' => '06b26928-f8a3-4241-9a2f-9432cd9ae9db'],
            ['project_id' => 'd08c3a5d-f2f5-477c-8d5f-e7f593b59bc1', 'technology_id' => 'a5e45673-7c5d-4ae0-9cf8-9e0cfcebc95d'],
            ['project_id' => 'd08c3a5d-f2f5-477c-8d5f-e7f593b59bc1', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'c0920275-86c5-4fa9-af33-8c63be7a74ac', 'technology_id' => 'eb2d3ae7-140a-407b-98e2-7264d91811a3'],
            ['project_id' => 'c0920275-86c5-4fa9-af33-8c63be7a74ac', 'technology_id' => 'b7fc2705-6083-48e2-90c8-4d8cf316d295'],
            ['project_id' => 'c0920275-86c5-4fa9-af33-8c63be7a74ac', 'technology_id' => '3bc1bfdb-387c-4ab3-8cb6-fdb8a77625c5'],
            ['project_id' => '19b846f3-d6b4-4b5f-b9d3-2012802fcd70', 'technology_id' => 'eb2d3ae7-140a-407b-98e2-7264d91811a3'],
            ['project_id' => '19b846f3-d6b4-4b5f-b9d3-2012802fcd70', 'technology_id' => 'b7fc2705-6083-48e2-90c8-4d8cf316d295'],
            ['project_id' => '19b846f3-d6b4-4b5f-b9d3-2012802fcd70', 'technology_id' => '3bc1bfdb-387c-4ab3-8cb6-fdb8a77625c5'],
            ['project_id' => '705341fd-7272-4b7d-bac1-dc274fd5dcf5', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '705341fd-7272-4b7d-bac1-dc274fd5dcf5', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '705341fd-7272-4b7d-bac1-dc274fd5dcf5', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '705341fd-7272-4b7d-bac1-dc274fd5dcf5', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '4d65a802-5e42-4a23-acf8-0999ef0c839e', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '4d65a802-5e42-4a23-acf8-0999ef0c839e', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '4d65a802-5e42-4a23-acf8-0999ef0c839e', 'technology_id' => 'a5e45673-7c5d-4ae0-9cf8-9e0cfcebc95d'],
            ['project_id' => '4d65a802-5e42-4a23-acf8-0999ef0c839e', 'technology_id' => '06b26928-f8a3-4241-9a2f-9432cd9ae9db'],
            ['project_id' => '081eb770-049f-453a-b50e-62635b069e93', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '081eb770-049f-453a-b50e-62635b069e93', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '081eb770-049f-453a-b50e-62635b069e93', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '081eb770-049f-453a-b50e-62635b069e93', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => '08e2713c-e7cf-4a6e-94f2-beb5ace5a279', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '08e2713c-e7cf-4a6e-94f2-beb5ace5a279', 'technology_id' => 'bac8f882-8155-43b3-9a95-f37a5b6b43cd'],
            ['project_id' => '08e2713c-e7cf-4a6e-94f2-beb5ace5a279', 'technology_id' => '2daa4362-25bc-40ba-90ee-1fb060ed5d92'],
            ['project_id' => '08e2713c-e7cf-4a6e-94f2-beb5ace5a279', 'technology_id' => 'e9125f60-ddc2-4e17-9c59-59072482cafb'],
            ['project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'technology_id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d'],
            ['project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'technology_id' => 'a2c0d37c-11d7-498a-bf64-34625904818b'],
            ['project_id' => 'ac620575-7ea4-4bc5-a915-f0de8edac514', 'technology_id' => '23d4325c-f9ba-4cbe-93dc-87594974ebc2'],
            ['project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'technology_id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d'],
            ['project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'technology_id' => 'a2c0d37c-11d7-498a-bf64-34625904818b'],
            ['project_id' => 'efc43e82-b6f6-4c7b-8689-bb4cb96dfd4d', 'technology_id' => '23d4325c-f9ba-4cbe-93dc-87594974ebc2'],
            ['project_id' => 'f785b014-bd08-4fda-a72b-b8fbe0c5eae7', 'technology_id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d'],
            ['project_id' => 'f785b014-bd08-4fda-a72b-b8fbe0c5eae7', 'technology_id' => 'a2c0d37c-11d7-498a-bf64-34625904818b'],
            ['project_id' => 'f785b014-bd08-4fda-a72b-b8fbe0c5eae7', 'technology_id' => '23d4325c-f9ba-4cbe-93dc-87594974ebc2'],
            ['project_id' => 'f21a0f75-72a3-4993-a4e7-b12f0eea6fb4', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => 'f21a0f75-72a3-4993-a4e7-b12f0eea6fb4', 'technology_id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d'],
            ['project_id' => 'f21a0f75-72a3-4993-a4e7-b12f0eea6fb4', 'technology_id' => '06b26928-f8a3-4241-9a2f-9432cd9ae9db'],
            ['project_id' => 'f21a0f75-72a3-4993-a4e7-b12f0eea6fb4', 'technology_id' => 'a5e45673-7c5d-4ae0-9cf8-9e0cfcebc95d'],
            ['project_id' => '5aa62dd3-2723-4d4c-8a1e-b77a8d2bdc80', 'technology_id' => '529eca3b-6273-48c5-b7aa-d492d44779b0'],
            ['project_id' => '5aa62dd3-2723-4d4c-8a1e-b77a8d2bdc80', 'technology_id' => 'b62cacb5-8eb0-4d21-a89d-1eb9dfdbdc2d'],
            ['project_id' => '5aa62dd3-2723-4d4c-8a1e-b77a8d2bdc80', 'technology_id' => '06b26928-f8a3-4241-9a2f-9432cd9ae9db'],
            ['project_id' => '5aa62dd3-2723-4d4c-8a1e-b77a8d2bdc80', 'technology_id' => 'a5e45673-7c5d-4ae0-9cf8-9e0cfcebc95d'],
        ]);

        // Curated homepage selection — the strongest full-stack / custom builds.
        // Adjust anytime from the admin (star toggle on each project card).
        $featured = [
            'YatiRaThai' => 1,
            'Akropora Resorts Website' => 2,
            'Compass Tools – SaaS' => 3,
            'RentSnap' => 4,
            'AnonFeedback' => 5,
            'PhiliFare' => 6,
        ];

        foreach ($featured as $title => $order) {
            DB::table('projects')
                ->where('title', $title)
                ->update(['featured' => true, 'display_order' => $order]);
        }

        // Surface high-demand capability keywords requested in job descriptions
        // as visible badges on the Development skill.
        $now = now();
        $extraTech = [
            ['id' => 'aaaaaaa1-0000-4000-8000-000000000001', 'name' => 'Core Web Vitals', 'domain' => 'web.dev'],
            ['id' => 'aaaaaaa2-0000-4000-8000-000000000002', 'name' => 'API Integrations', 'domain' => null],
            ['id' => 'aaaaaaa3-0000-4000-8000-000000000003', 'name' => 'Performance Optimization', 'domain' => null],
        ];
        foreach ($extraTech as $tech) {
            DB::table('technologies')->insert([
                'id' => $tech['id'],
                'name' => $tech['name'],
                'domain' => $tech['domain'],
                'icon_url' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $developmentSkillId = '1970bf5c-3fd5-4cfc-8c5f-5540634411fc';
        foreach ($extraTech as $tech) {
            DB::table('skill_technologies')->insert([
                'skill_id' => $developmentSkillId,
                'technology_id' => $tech['id'],
            ]);
        }

        // Group skills into clear capability categories (shown as a pill on each
        // card) and order them so related areas sit together.
        $skillCategories = [
            'Development' => ['Frontend & Backend', 1],
            'Databases' => ['Backend', 2],
            'DevOps' => ['Infrastructure', 3],
            'CMS & Automations' => ['Automation', 4],
            'Mobile Development' => ['Mobile', 5],
            'Ethical Hacking' => ['Security', 6],
        ];

        foreach ($skillCategories as $title => [$category, $order]) {
            DB::table('skills')
                ->where('title', $title)
                ->update(['category' => $category, 'display_order' => $order]);
        }
    }
}
