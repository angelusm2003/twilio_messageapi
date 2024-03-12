# Twilio Messages
this repositories have 2 project:

1. the frontend with angular (frontwilio)
2. the backend with springboot , hibernate and sql lite (TwillioSender)
   
# Spring Boot Twilio Sender

This project is a Spring Boot application for sending messages via Twilio. It provides APIs to send messages and retrieve message details.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Features

- Send messages using Twilio API.
- Retrieve message details based on various criteria (e.g., date range, order).

## Prerequisites

Before running this project, make sure you have the following installed:

- Java Development Kit (JDK) 8 or higher
- Maven

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/spring-boot-twilio-sender.git
    ```

2. Navigate to the project directory:

    ```bash
    cd spring-boot-twilio-sender
    ```

3. Build the project:

    ```bash
    mvn clean install
    ```

## Configuration

Before running the application, you need to configure your Twilio credentials in a .env file in the project directory. add the following properties with your Twilio account details:

```.env
twilio.accountSid=YOUR_TWILIO_ACCOUNT_SID
twilio.authToken=YOUR_TWILIO_AUTH_TOKEN
twilio.phoneNumber=YOUR_TWILIO_PHONE_NUMBER
```

## Usage

To run the application, use the following command:

```
mvn spring-boot:run
```
or run from any ide

## Endpoints

    POST /messages: Send a message. Requires a JSON payload containing the recipient's phone number (to) and the message content (message).

    GET /messages: Retrieve messages based on various criteria. Supports optional query parameters such as startDate, endDate, orderBy (asc, desc), also you can use without any parameter

# Angular Frontend Message App

This is a simple Angular application for sending and listing messages. It includes features to send messages to a backend server and display a list of messages.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#License)

## Features

    Message Form: Allows users to send messages by providing recipient and message content.
    Message List: Displays a list of messages retrieved from the backend server.

## Prerequisites

1.Running the backend TwilioSender
2.Installed the last version of node
3.InstalledAngular 17.2.0

## Installation

Clone the repository:

```bash
git clone <repository_url>
```

Navigate to the project directory:

```bash
cd frontwilio
```

Install dependencies:

```bash
npm install
```
  
## Configuration

    Backend Server: This application have a backend server running on http://localhost:8080/ for sending and retrieving messages. 

## Usage

Start the development server:

```bash
ng serve
```

Open your web browser and navigate to http://localhost:4200/ to view the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please let me know 

## License

This project is licensed under the MIT License. See the LICENSE file for details.


