# [chatsigma.io](https://www.chatsigma.io/)
<br>

Chatbot developed to answer every day queries, have communication and be a virtual assistant. Developed with MERN, OpenAI API, AWS, Material UI.
<br>
<br>

The structure of the codebase is as follows:

```
chat-sigma/
└── src/
    ├── App.js
    ├── App.test.js
    ├── assets/
    ├── components/
    │   ├── chat/
    │   │   ├── chat-messages/
    │   │   │   ├── chat-messages.component.jsx
    │   │   │   ├── chat-messages.styles.jsx
    │   │   │   ├── message-couple/
    │   │   │   │   ├── message-couple.component.jsx
    │   │   │   │   └── message-couple.styles.jsx
    │   │   │   ├── sigma-message/
    │   │   │   │   ├── sigma-message.component.jsx
    │   │   │   │   └── sigma-message.styles.jsx
    │   │   │   └── user-message/
    │   │   │       ├── user-message.component.jsx
    │   │   │       └── user-message.styles.jsx
    │   │   └── send-message/
    │   │       ├── send-message.component.jsx
    │   │       └── send-message.styles.scss
    │   ├── export/
    │   ├── home/
    │   └── shared/
    │       ├── button/
    │       ├── form-input/
    │       │   ├── form-input.component.jsx
    │       │   ├── form-input.styles.jsx
    │       │   └── form-input.styles.scss
    │       ├── mui/
    │       │   ├── card/
    │       │   │   ├── card.component.jsx
    │       │   │   └── card.styles.scss
    │       │   ├── circular-progress/
    │       │   │   └── circular-progress.component.jsx
    │       │   ├── icon-button/
    │       │   │   └── icon-button.styles.jsx
    │       │   ├── linear-progress/
    │       │   │   └── linear-progress.component.jsx
    │       │   ├── media-card/
    │       │   │   ├── media-card.component.jsx
    │       │   │   └── media-card.styles.jsx
    │       │   ├── paper/
    │       │   │   ├── paper.component.jsx
    │       │   │   └── paper.styles.scss
    │       │   └── text-field/
    │       │       └── text-field.component.jsx
    │       └── navigation/
    │           ├── navigation.component.jsx
    │           └── navigation.styles.jsx
    ├── contexts/
    │   ├── chat/
    │   │   └── chat.context.jsx
    │   └── export/
    ├── index.js
    ├── index.scss
    ├── logo.svg
    ├── pages/
    │   ├── chat/
    │   │   ├── chat.component.jsx
    │   │   └── chat.styles.jsx
    │   ├── export/
    │   │   ├── export.component.jsx
    │   │   └── export.styles.jsx
    │   └── home/
    │       ├── home.component.jsx
    │       └── home.styles.jsx
    ├── reportWebVitals.js
    ├── routes/
    │   ├── chat/
    │   │   ├── chat.component.jsx
    │   │   └── chat.styles.jsx
    │   ├── export/
    │   │   └── export.component.jsx
    │   ├── home/
    │   │   └── home.component.jsx
    │   └── navigation/
    │       ├── navigation.component.jsx
    │       └── navigation.styles.jsx
    ├── setupTests.js
    └── utils/
        ├── alerts/
        ├── api-requests/
        │   └── chat.requests.js
        ├── constants/
        │   └── shared.constants.js
        ├── errors/
        │   └── chat.errors.js
        ├── helpers/
        └── validations/
            └── chat.validation.js
```

<figure>
  <img width="927" alt="image" src="https://github.com/user-attachments/assets/3e052a4b-9faa-4bf4-a33c-079843a5942a">
</figure>
<br>

[Figure 1: High level view](https://whimsical.com/chat-sigma-WwC92dVpKTpRRhUoHBmWXg)
<br>
<br>

### The application consists of the following main components:

1. __Client__: React frontend web application which initiates requests for the chatbot and exporting chat sessions.
2. __Chat Sigma API__: Utilizes the OpenAI API to handle chat requests. Returns a detailed summary for exporting chat sessions.
3. __OpenAI API service__: OpenAI service which uses different GPT models and tokens.
4. __Security__: AWS security services (AWS Inspector and GuardDuty) which monitors the security of APIs. Later, data and logs from the services are queried and viewed using an external security tool.
5. __Monitoring__: Monitoring service which collects data and logs from APIs using CloudWatch, then stores them in S3 to be viewed as a dashboard via an external monitoring tool. 
6. __Notifications__: Receives various data and logs in S3 buckets and later sends emails (on issues or failures) using SQS and Lambda.
<br>

### Setting up the development environment:

1. __Cloning the repository__: You would first need to clone this repository on the host you want to set up your development environment:
```shell
git clone https://github.com/tahmid-saj/chat-sigma.git
```
2. __Installing dependencies__: Install the required NPM packages in __package.json__:
```shell
npm install
```
3. __Environment variables__: The required environment variables are used:
```env
REACT_APP_API_URL_CHAT=<URL of chatbot API>
```
4. __API__: Client requests go to an API that uses the OpenAI API. The API also provides the chat summary exporting feature.
5. __AWS__: Setting up the AWS services is an optional step as this is on a development environment. However, the same services could be used to create the tools mentioned in the high level view.
6. __Running the client__: The client can be run using:
```
npm start
```
