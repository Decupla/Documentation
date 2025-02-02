# Setup

Decuple was developed with simplicity in mind. Therefore, setting up Decupla is pretty easy.

### 1. Get the code

You can find the source code of Decupla on the GitHub Page: [https://github.com/Decupla/Decupla](https://github.com/Decupla/Decupla).\
Download the code from The GitHub Page or clone the repository.

### 2. Install dependencies

After you got the code you need to install the npm dependencies.
```
npm i
```
### 3. Add .env file

Next, create a `.env` file in the root directory of Decupla.\
You need to define two environment variables:

#### TOKEN_SECRET
The `TOKEN_SECRET` variable is needed for Decupla's authentication system. To ensure the security of the system, choose a string with at least 32 characters, including uppercase and lowercase letters, numbers, and special characters. The variable should look like this:

``` env title=".env"
TOKEN_SECRET = s3cr3t!@#S1gn@ture$^&*Key123
```

Make sure you keep this string safe and private!

#### SESSION_SECRET
The `SESSION_SECRET` variable is used to manage session data. Similar to TOKEN_SECRET, it should be a string of at least 32 characters, including uppercase and lowercase letters, numbers, and special characters. Do **not** use the same string as TOKEN_SECRET. The variable should look like this:

``` env title=".env"
SESSION_SECRET = bR!ghTSecr3t@P@ssw0rD&2025S3s$1on
```

### 4. Start The Application

After you got everthing set up, the last step is to start the application:
```
npm start
```