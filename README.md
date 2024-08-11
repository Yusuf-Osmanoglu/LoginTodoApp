# LoginTodoApp

## Overview

LoginTodoApp, kullanıcıların kayıt olup giriş yaparak kendi yapılacaklar listelerini yönetebilecekleri bir web uygulamasıdır. Uygulama, kullanıcı doğrulama, token tabanlı kimlik doğrulama ve görev yönetimi özelliklerini sunar.

## Features

- 🔒 **Kullanıcı Kaydı ve Girişi:** Kullanıcılar yeni hesap oluşturabilir ve mevcut hesaplarına giriş yapabilir.
- 🔑 **Token Tabanlı Kimlik Doğrulama:** Güvenli kullanıcı oturumları için JWT kullanılır.
- 📝 **Görev Yönetimi:** Her kullanıcı kendi görevlerini ekleyebilir, tamamlayabilir ve silebilir.
- 💾 **Yerel Depolama:** Kullanıcı oturum bilgileri ve görevler tarayıcıda saklanır.
- 📱 **Responsive Tasarım:** Uygulama, mobil ve masaüstü cihazlarda sorunsuz çalışır.

## Installation

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Bu repository'yi klonlayın:

    ```bash
    git clone https://github.com/Yusuf-Osmanoglu/LoginTodoApp.git
    cd LoginTodoApp
    ```

2. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

3. Uygulamayı başlatın:

    ```bash
    npm run dev
    ```

    Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## Usage

1. Yeni bir hesap oluşturun veya mevcut bir hesapla giriş yapın.
2. - 🔒 Test Kullanıcısı: User2 Şifre: 123456
3. Giriş yaptıktan sonra, yapılacaklar listenizi oluşturabilir, görev ekleyebilir, tamamlayabilir ve silebilirsiniz.
4. Uygulamadan çıkış yaparak güvenli bir şekilde oturumu kapatabilirsiniz.

---

# LoginTodoApp

## Overview

LoginTodoApp is a web application that allows users to register, log in, and manage their own to-do lists. The app features user authentication, token-based authorization, and task management.

## Features

- 🔒 **User Registration and Login:** Users can create new accounts and log in to existing ones.
- 🔑 **Token-Based Authentication:** JWT is used for secure user sessions.
- 📝 **Task Management:** Each user can add, complete, and delete their tasks.
- 💾 **Local Storage:** User session data and tasks are stored in the browser.
- 📱 **Responsive Design:** The application works seamlessly on both mobile and desktop devices.

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/Yusuf-Osmanoglu/LoginTodoApp.git
    cd LoginTodoApp
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm run dev
    ```

    The app will be running at `http://localhost:3000` by default.

## Usage

1. Register a new account or log in with an existing one.
2. - 🔒 Test User: User2 Password: 123456
3. Once logged in, you can create your to-do list, add tasks, mark them as complete, and delete them.
4. Log out to securely end your session.
