# Introduction
Entity is a Singleton service/container for every instance of xcaliber platform(instance being a Hospital level System or  Individual Practice and not the deployment instance). Entity contains all objects - human or otherwise - that a healthcare system needs ro run their day to day operation and business. Examples of Objects could include Patients, Practitioners, Operating Rooms, Locations, Equipments, Cars, etc. To support directories within xCaliber platform, Entity service will be enabled allowing integration through REST endpoints.

# Integration
Following artifacts are available to help with the integration to entity service
## API Documentation
To help with integration of entity service, detailed API documentation has been published and made available [here](https://directory-service.redoc.ly/).
## Postman Collection
Postman collection with example use cases around APIs has been published and made available [here](https://www.postman.com/xcaliberapis/workspace/public/collection/25270831-00e5c2ec-746d-48a4-99f9-1df18663d544).

## Entity data model 
Example json has been added for respective entities to represent the schema. These are hierarchical in nature and would provide a lot of help in writing query APIs on these entities. 