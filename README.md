
<p align="center">
  <a href="#bahasa-indonesia">🇮🇩 Bahasa Indonesia</a> | <a href="#english">🇬🇧 English</a>
</p>

<p align="center">
  <img src="/public/polri.png" width="100">
  <img src="/public/tik.png" height="100">
</p>

<a name="bahasa-indonesia"></a>
# Dashboard Kriminal Polda Metro Jaya

## Latar Belakang

Kepolisian Negara Republik Indonesia, khususnya Polda Metro Jaya, memiliki Satuan Kerja yang sangat penting yaitu BID TIK, yang bertanggung jawab atas pengembangan infrastruktur Teknologi Informasi dan Telekomunikasi. Di dalamnya terdapat Sub Bidang Tekinfo, yang saat ini tengah menghadapi tantangan besar dalam memonitor kasus-kasus yang terjadi di wilayah hukum Polda Metro Jaya.

Seiring bertambahnya jumlah laporan yang masuk, tim Tekinfo menemukan kesulitan dalam mengelola dan memantau secara efisien. Hal ini dikarenakan sistem yang ada saat ini belum mampu mengakomodir volume data yang besar dan kompleks, sehingga sering terjadi keterlambatan dalam penanganan kasus.

Menyadari permasalahan ini, kami terinspirasi untuk menciptakan solusi yang inovatif. Ide yang diusulkan adalah pembuatan sebuah website internal khusus untuk Polri, yang dihosting menggunakan fasilitas hosting Mabes Polri. Website ini dirancang untuk mengatasi masalah pemantauan laporan yang sudah masuk ke Polda Metro Jaya.

Konsep utama dari website ini adalah **Perancangan Visualisasi Data Input Laporan Polisi (LP) Polda Metro Jaya**. Sistem ini dirancang untuk memudahkan Kapolda Metro Jaya dan timnya dalam memonitor semua kasus yang dilaporkan. Dengan visualisasi data yang jelas dan mudah dipahami, website ini diharapkan dapat meningkatkan efisiensi dan kecepatan dalam penanganan kasus, sekaligus memberikan wawasan yang lebih mendalam tentang pola-pola kriminal di wilayah hukum Polda Metro Jaya.

## Fitur Utama

- **Dashboard Komprehensif**: Tampilan visual dari semua data kriminal Polda Metro Jaya dalam satu layar.
- **Visualisasi Interaktif**: Berbagai jenis visualisasi (peta, grafik batang, grafik lingkaran, grafik garis) untuk analisis data yang mendalam.
- **Filtering Data**: Kemampuan untuk memfilter data berdasarkan tahun, wilayah, dan jenis kriminal.
- **Responsif**: Dapat diakses dari berbagai perangkat, dengan pengalaman optimal pada layar besar.
- **Mode Gelap/Terang**: Dukungan untuk preferensi tampilan pengguna.
- **Statistik Ringkasan**: Kartu statistik yang menampilkan metrik kunci secara cepat.

## Teknologi yang Digunakan

### Frontend
- **Next.js**: Framework React untuk aplikasi web dengan server-side rendering dan static site generation.
- **TypeScript**: Superset JavaScript yang menambahkan tipe statis.
- **Tailwind CSS**: Framework CSS utility-first untuk styling yang cepat dan konsisten.
- **Shadcn UI**: Komponen UI yang dapat digunakan kembali, dibangun di atas Radix UI dan Tailwind CSS.
- **Lucide Icons**: Library ikon SVG yang modern dan konsisten.

### Visualisasi Data
- **Tableau**: Platform visualisasi data yang kuat untuk membuat dan menyematkan visualisasi interaktif.
- **Tableau Public API**: Untuk mengintegrasikan visualisasi Tableau ke dalam aplikasi web.

### Deployment & Hosting
- **Hosting Mabes Polri**: Infrastruktur hosting internal untuk keamanan dan kepatuhan data.

## Persyaratan Sistem

- **Node.js**: Versi 18.x atau lebih baru.
- **npm**: Versi 9.x atau lebih baru.
- **Browser modern**: Chrome, Firefox, Safari, Edge.
- **Koneksi internet**: Untuk memuat visualisasi Tableau.

## Instalasi dan Pengaturan

### Prasyarat
Pastikan Anda telah menginstal:
- Node.js (versi 18 atau lebih baru).
- npm (biasanya disertakan dengan Node.js).
- Git untuk kloning repositori.

### Langkah-langkah Instalasi

1.  **Kloning Repositori**
    ```bash
    git clone [https://github.com/daws11/polda-metrojaya-dashboard.git](https://github.com/daws11/polda-metrojaya-dashboard.git)
    cd polda-metrojaya-dashboard
    ```

2.  **Instal Dependensi**
    ```bash
    npm install
    ```

3.  **Konfigurasi Lingkungan**
    Salin file `.env.example` ke `.env.local` dan sesuaikan variabel lingkungan jika diperlukan:
    ```bash
    cp .env.example .env.local
    ```

4.  **Jalankan Server Pengembangan**
    ```bash
    npm run dev
    ```

5.  **Buka Aplikasi**
    Buka browser dan akses http://localhost:3000.

### Membangun untuk Produksi

1.  **Buat Build Produksi**
    ```bash
    npm run build
    ```

2.  **Jalankan Build Produksi**
    ```bash
    npm start
    ```

## Struktur Proyek

```
crime-dashboard/
├── components/          # Komponen React yang dapat digunakan kembali
│   ├── ui/              # Komponen UI dasar dari Shadcn UI
│   ├── dashboard-layout.tsx # Layout utama dashboard
│   ├── tableau-embed.tsx    # Komponen untuk menyematkan visualisasi Tableau
│   ├── header.tsx           # Header aplikasi dengan filter dan toggle tema
│   ├── footer.tsx           # Footer aplikasi
│   ├── stats-cards.tsx      # Kartu statistik ringkasan
│   ├── filter-bar.tsx       # Bar filter untuk data
│   ├── theme-toggle.tsx     # Toggle tema gelap/terang
│   └── responsive-alert.tsx # Alert untuk layar kecil
├── hooks/              # Custom React hooks
│   └── useScreenSize.ts # Hook untuk mendeteksi ukuran layar
├── lib/                # Utilitas dan fungsi pembantu
│   └── utils.ts        # Fungsi utilitas umum
├── public/             # Aset statis (gambar, favicon, dll.)
├── src/                # Kode sumber utama
│   └── app/            # Direktori aplikasi Next.js
│       ├── globals.css # Stylesheet global
│       ├── layout.tsx  # Layout root aplikasi
│       └── page.tsx    # Halaman utama dashboard
├── .env.example        # Contoh variabel lingkungan
├── .eslintrc.json      # Konfigurasi ESLint
├── .gitignore          # File dan direktori yang diabaikan oleh Git
├── next.config.js      # Konfigurasi Next.js
├── package.json        # Dependensi dan skrip npm
├── postcss.config.js   # Konfigurasi PostCSS
├── README.md           # Dokumentasi proyek (file ini)
├── tailwind.config.js  # Konfigurasi Tailwind CSS
└── tsconfig.json       # Konfigurasi TypeScript
```

## Penggunaan

### Navigasi Dashboard
Dashboard terdiri dari beberapa tab yang dapat diakses melalui navigasi tab di bagian atas:
- **Overview**: Tampilan keseluruhan data kriminal.
- **Peta**: Visualisasi geografis sebaran kriminal.
- **Pie Chart**: Distribusi kriminal berdasarkan kategori.
- **Bar Chart**: Perbandingan jumlah kriminal antar wilayah atau kategori.
- **Line Chart**: Tren kriminal dari waktu ke waktu.
- **Semua Data**: Tampilan semua visualisasi dalam satu layar.

### Filtering Data
Gunakan filter di bagian atas dashboard untuk menyaring data berdasarkan:
- **Tahun**: Pilih tahun data yang ingin ditampilkan.
- **Wilayah**: Filter berdasarkan wilayah hukum tertentu.
- **Jenis Kriminal**: Filter berdasarkan kategori kriminal.

### Beralih Tema
Klik tombol toggle tema di pojok kanan atas untuk beralih antara mode terang dan gelap.

<a name="english"></a>
# Polda Metro Jaya Criminal Dashboard

## Background

The Indonesian National Police, especially Polda Metro Jaya, has a very important Work Unit, namely BID TIK, which is responsible for the development of Information and Communication Technology infrastructure. Within it, there is the Tekinfo Sub-Division, which is currently facing a major challenge in monitoring cases occurring within the legal jurisdiction of Polda Metro Jaya.

As the number of incoming reports increases, the Tekinfo team is finding it difficult to manage and monitor efficiently. This is because the current system is not yet able to accommodate the large and complex volume of data, which often leads to delays in handling cases.

Recognizing this problem, we were inspired to create an innovative solution. The proposed idea is the creation of a special internal website for the Police, hosted using the Mabes Polri hosting facility. This website is designed to address the issue of monitoring reports that have been submitted to Polda Metro Jaya.

The main concept of this website is the **Design of Data Input Visualization for Polda Metro Jaya Police Reports (LP)**. This system is designed to make it easier for the Chief of Polda Metro Jaya and his team to monitor all reported cases. With clear and easy-to-understand data visualization, this website is expected to increase efficiency and speed in handling cases, while also providing deeper insights into criminal patterns within the legal jurisdiction of Polda Metro Jaya.

## Key Features

- **Comprehensive Dashboard**: Visual display of all Polda Metro Jaya criminal data on a single screen.
- **Interactive Visualizations**: Various types of visualizations (maps, bar charts, pie charts, line charts) for in-depth data analysis.
- **Data Filtering**: Ability to filter data by year, region, and crime type.
- **Responsive**: Accessible from various devices, with an optimal experience on large screens.
- **Dark/Light Mode**: Support for user display preferences.
- **Summary Statistics**: Statistic cards displaying key metrics at a glance.

## Technologies Used

### Frontend
- **Next.js**: React framework for web applications with server-side rendering and static site generation.
- **TypeScript**: JavaScript superset that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.
- **Shadcn UI**: Reusable UI components built on top of Radix UI and Tailwind CSS.
- **Lucide Icons**: Modern and consistent SVG icon library.

### Data Visualization
- **Tableau**: Powerful data visualization platform for creating and embedding interactive visualizations.
- **Tableau Public API**: For integrating Tableau visualizations into the web application.

### Deployment & Hosting
- **Mabes Polri Hosting**: Internal hosting infrastructure for data security and compliance.

## System Requirements

- **Node.js**: Version 18.x or later.
- **npm**: Version 9.x or later.
- **Modern browser**: Chrome, Firefox, Safari, Edge.
- **Internet connection**: To load Tableau visualizations.

## Installation and Setup

### Prerequisites
Make sure you have installed:
- Node.js (version 18 or later).
- npm (usually included with Node.js).
- Git to clone the repository.

### Installation Steps

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/daws11/polda-metrojaya-dashboard.git](https://github.com/daws11/polda-metrojaya-dashboard.git)
    cd polda-metrojaya-dashboard
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Copy the `.env.example` file to `.env.local` and adjust environment variables if necessary:
    ```bash
    cp .env.example .env.local
    ```

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```

5.  **Open the Application**
    Open your browser and access http://localhost:3000.

### Building for Production

1.  **Create Production Build**
    ```bash
    npm run build
    ```

2.  **Run Production Build**
    ```bash
    npm start
    ```

## Project Structure
```
crime-dashboard/
├── components/         # Reusable React components
│   ├── ui/             # Basic UI components from Shadcn UI
│   ├── dashboard-layout.tsx # Main dashboard layout
│   ├── tableau-embed.tsx     # Component to embed Tableau visualizations
│   ├── header.tsx          # Application header with filters and theme toggle
│   ├── footer.tsx          # Application footer
│   ├── stats-cards.tsx     # Summary statistics cards
│   ├── filter-bar.tsx      # Filter bar for data
│   ├── theme-toggle.tsx    # Dark/light theme toggle
│   └── responsive-alert.tsx # Alert for small screens
├── hooks/              # Custom React hooks
│   └── useScreenSize.ts # Hook to detect screen size
├── lib/                # Utilities and helper functions
│   └── utils.ts          # Common utility functions
├── public/             # Static assets (images, favicon, etc.)
├── src/                # Main source code
│   └── app/            # Next.js application directory
│       ├── globals.css # Global stylesheet
│       ├── layout.tsx  # Root application layout
│       └── page.tsx    # Main dashboard page
├── .env.example        # Example environment variables
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Files and directories ignored by Git
├── next.config.js      # Next.js configuration
├── package.json        # npm dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── README.md           # Dokumentasi proyek (file ini)
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```
## Usage

### Dashboard Navigation
The dashboard consists of several tabs accessible through the tab navigation at the top:
- **Overview**: Overall view of criminal data.
- **Map**: Geographic visualization of crime distribution.
- **Pie Chart**: Distribution of crimes by category.
- **Bar Chart**: Comparison of crime counts between regions or categories.
- **Line Chart**: Crime trends over time.
- **All Data**: View all visualizations on a single screen.

### Data Filtering
Use the filters at the top of the dashboard to filter data by:
- **Year**: Select the year of data to display.
- **Region**: Filter by specific legal jurisdiction.
- **Crime Type**: Filter by crime category.

### Toggle Theme
Click the theme toggle button in the top right corner to switch between light and dark mode.
