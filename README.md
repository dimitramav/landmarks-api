# Points of Interest API

### Introduction

The API is designed to facilitate core data management operations (Create, Read, Update, Delete - CRUD) enabling the administration of users and Points of Interest (POI).

### API Actions

#### Users

- **User Registration**

  New individuals can register by providing their name, age, and email.
  The API checks for existing entries with the same email and ensures the individual is above 18 years old.
  Data is stored in the "Users" collection.

- **Read User Information**

  Individuals can retrieve information for a specific user or view details for all entries.
  The API allows searching for an entry based on their email, displaying only their name.
  Update User Information:

- **Update User Information**

  Individuals can update their information using the API.

- **Delete User**

  Individuals have the ability to delete their account.

#### Points of Interest (POI)

- **Add Points of Interest (POI)**

  Individuals can store new Points of Interest, such as museums, by specifying details like name, category, address, and an optional photo. POIs are     
  stored in the "POIs" collection.

- **Discover Points of Interest (POI)**

  Individuals can explore all Points of Interest in the city.
  The API supports searching for specific POIs based on parameters such as category.

- **Update POI Information**
  
  Individuals can update information for Points of Interest.

- **Delete POI**
  
  Individuals have the ability to delete a Point of Interest.

- **Upload image**
  
  Individuals can update a photo for a specific POI and save it in a server folder. The file path will be stored in the POI record.

### Installation Guide

- Clone this repository [here](https://github.com/dimitramav/pois-api).
- Run `npm install` to install all dependencies
- Configure your database choice in the application entry file.
- Create `config.ENV` file in your project root folder and add your variables. See `confing_sample.ENV` for assistance.

### Usage

- Run `npm start` to start the application.
- Connect to the API using Postman on port `8080`.

### API Endpoints
<table>
  <tr>
    <th>HTTP</th>
    <th>Action</th>
    <th>Request Body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>To create new POI <pre>api/pois</pre></td>
    <td> <pre lang="json">{
    "name": "Polemiko mouseio",<br/>
    "category": "museum",<br/>
    "longitude": 80,<br/>
    "latitude": 90<br/>
 }</pre></td>
    <td>
      <pre lang="json">200 {
       "name": "Polemiko mouseio",<br/>
       "category": "museum",<br/>
       "longitude": 80,<br/>
       "latitude": 90,<br/>
       "_id": "xxxx",<br/>
       "_v": 0<br/>
      }</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>To create new user <pre>/api/users</pre></td>
    <td> <pre lang="json">{
    "name": "username",<br/>
    "age": 20,<br/>
    "email": "user@email.com",<br/>
}</pre></td>
    <td>
        <pre lang="json">200 {
       "name": "username",<br/>
       "age": 20,<br/>
       "email": "user@email.com"<br/>
       "_id": "yyy",<br/>
       "_v": 0<br/>
      }</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>GET</td>
    <td>
      To retrieve all or specific POIs based on parameters <pre>/api/pois</pre>
    </td>
    <td></td>
    <td>
      <pre lang="json">200 [ <br/>
      {
        "name": "Polemiko mouseio",<br/>
        "category": "museum",<br/>
        "longitude": 80,<br/>
        "latitude": 90,<br/>
        "image":[optional]
        "_id": "xxxx",<br/>
        "_v": 0<br/>
       },<br/>
      ...</br>
     ]</br>
     //or</br>
     {
       "name": "Polemiko mouseio",<br/>
       "category": "museum",<br/>
       "longitude": 80,<br/>
       "latitude": 90,<br/>
       "image":[optional]
       "_id": "xxxx",<br/>
       "_v": 0<br/>
      }  
      </pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>GET</td>
    <td>To retrieve all users <pre>/api/users</pre></td>
    <td></td>
    <td>
      <pre lang="json">200 [ <br/>
      {
        "name": "username",<br/>
        "age": 20,<br/>
        "email": "user@email.com",<br/>
        "_id": "xxxx",<br/>
        "_v": 0<br/>
       },<br/>
      ...</br>
     ]</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>GET</td>
    <td>To retrieve a single user by email <pre>/api/users/:email</pre></td>
    <td></td>
    <td>
      <pre lang="json">200 {
       "name": "username",<br/>
       "age": 20,<br/>
       "email": "user@email.com",<br/>
       "_id": "xxxx",<br/>
       "_v": 0<br/>
      }</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>To edit the details of a single POI by id <pre>/api/pois/:id</pre></td>
    <td><pre>modified POI</pre></td>
    <td>
      <pre lang="json">200 {"message": "POI updated successfully!"}</pre>
      <pre lang="json">404 {"message": "POI not found or no changes were made."}</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>To add or edit the image of a single POI <pre>/api/pois/upload/:id</pre></td>
    <td><pre lang="json">{ "image": FILE }</pre></td>
    <td>
      <pre lang="json">200 {"message": "Image upload is successful!"}</pre>
      <pre lang="json">404 {"message": "User not found or no changes were made."}</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>To edit the details of a single user by email <pre>/api/users/:email</pre></td>
    <td><pre>modified user</pre></td>
    <td>
      <pre lang="json">200 {"message": "User updated successfully!"}</pre>
      <pre lang="json">404 {"message": "POI not found or no changes were made."}</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>To delete a single POI by id <pre>/api/pois/:id</pre></td>
    <td></td>
    <td>
      <pre lang="json">200 {"message": "POI has been removed successfully!"}</pre>
      <pre lang="json">404 {"message": "POI not found or no changes were made."}</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>To delete a single user by email <pre>/api/users/:email</pre></td>
    <td></td>
    <td>
      <pre lang="json">200 {"message": "User has been removed successfully!"}</pre>
      <pre lang="json">404 {"message": "User not found or no changes were made."}</pre>
      <pre lang="json">500 {"message": error.message}</pre>
    </td>
  </tr>
</table>


### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
