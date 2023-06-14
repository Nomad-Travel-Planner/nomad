import React from "react";
import axios from "axios";
import { Button, Card, Form, Col, Row, Alert } from "react-bootstrap";
import AirbnbCard from "./AirbnbCard";
import './Airbnb.css';

class Airbnb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // airbnbData: [],
      error: '',
      airbnbData: [
        {
          "url": "https://www.airbnb.com/rooms/2150160",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-3904491/original/3b5bc385-b2e7-40ee-9ca7-7af28b00579c.jpeg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 540,
          "rating": 4.51,
          "address": "Paris, IDF, France",
          "price": {
            "rate": 95,
            "currency": "USD",
            "total": 95,
            "priceItems": [
              {
                "amount": 64
              },
              {
                "amount": 14
              },
              {
                "amount": 13
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Charming room in a charming flat",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/e0e23de6-a3aa-45be-94f0-e5ff7958c5e8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/20278634-c22e-47d1-a396-5f07074e6d56.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7b165168-cc07-4a66-b52e-487415daef68.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/d3e46cd6-ba59-4785-b367-cea56585bfb2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/c9a39059-f7aa-4621-a53a-b4fd086db919.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/b0d54526-39f9-4d61-b3d4-feb8fcc6f20a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/3f4a17bd-6a69-4140-8b09-9aa0044942bd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8c18a791-d59d-4ce8-a2cb-1f8e9d370ed7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/825936a4-c103-470c-8f1f-86ff3771c6a0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/c15b25b2-f5f1-493f-abef-110e1d85ec07.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/865494c4-e223-46c3-a5b0-1fea23aa0a31.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/a9f59943-6504-4c26-aeb8-5fd3b457aee3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/18b8eacd-62a5-480c-b9cc-aff2b921bd97.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/59524505-2ffa-4682-86a7-8e3be9c4e437.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/e707f245-ff85-4b0b-9422-3e76e51de31d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8a1c13f6-7f75-498c-af36-30fa32331975.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/0737538f-8531-4d69-95d6-0a61eddbb369.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8ac187c9-eaa8-4618-8012-aeae7aa35e02.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/d0979698-fed7-4b6c-93df-90ee9c8e8fc5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/116381a3-aceb-4ac4-bd6c-19e63184673c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/a6f821d5-d356-4434-9598-50cea65c471a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/3902253d-d37a-4ab1-8b3b-ef991b4cceb2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8a5f44c2-0e74-4ebd-95c5-aa5f80e23b79.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/91f95d35-6c0f-4e5a-aa67-87fba2d82816.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36065799/898d6f17_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/112406ea-09fe-4b8f-8d2a-4e21c99f7155.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/5d941f08-0424-46fd-923d-971166b3530a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/35768243/cf00d011_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36066076/d1c71a11_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36066127/4be5c3a8_original.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/774582581519038073",
          "city": "Clichy",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-296443273/original/072cabd8-50af-4488-96a3-a77cf4687574.jpeg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 41,
          "rating": 4.8,
          "address": "Clichy, Île-de-France, France",
          "price": {
            "rate": 48,
            "currency": "USD",
            "total": 48,
            "priceItems": [
              {
                "amount": 39
              },
              {
                "amount": 7
              },
              {
                "amount": 2
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen"
          ],
          "name": "Chill out room.",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/1edabf13-5e25-4bd9-a857-b2b58b58997c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/10b2e1a2-d457-429f-9903-159d15853697.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/3db59b54-856c-4a1d-a3bb-763a6d8add1a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/9f7da025-6f92-4925-8d1c-c935d3298317.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/4a27c4a0-4999-4cb2-ad3b-52a336d4f6b0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/71b68203-e503-4694-9d95-963d3eb54b02.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/f61d4232-c710-48cd-ac9a-b44048d8b120.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/26ab4862-5562-4e91-8315-98e1d1697200.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/6c9b3514-5c7d-4aaa-a941-524006f05288.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/886776064762251291",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7e15d6ff-d472-4856-9a68-009629e05131.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 0,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 59,
            "currency": "USD",
            "total": 59,
            "priceItems": [
              {
                "amount": 48
              },
              {
                "amount": 8
              },
              {
                "amount": 3
              }
            ]
          },
          "previewAmenities": [
            "Wifi"
          ],
          "name": "Nid d’oiseau (bis)",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/7ed4df69-0c79-40da-91fc-890788a5736b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/58137a59-e491-4820-9c66-483776c7a7a8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/05dd6d0a-7207-45e8-8300-6b6fac736dc6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24393758-90c3-47c8-984b-673f19ec9a7c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4e19aab3-c7c7-4eab-bbb5-e02d125c7241.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/884051012248829459",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=C&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
          "persons": 3,
          "reviewsCount": 0,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 131,
            "currency": "USD",
            "total": 131,
            "priceItems": [
              {
                "amount": 108
              },
              {
                "amount": 18
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Appartement plein coeur Paris",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 2,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/3ecb9155-d820-4f63-8e60-72296b63b37c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/3cc71d2e-267f-4072-9a20-f825dc2939a6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/ef2a6e9c-9bc3-4b80-acc8-455f1b545bb8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/204948f6-65b3-4f78-8c50-bc53e46bd68f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/704f9388-4278-4f03-b319-c17a365afd73.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/dae93091-4bc7-4798-9a60-c3e6bd03d7e1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/464e96ed-d1fe-4278-8e0e-a5bbc3f5a2e1.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/49651214",
          "city": "Neuilly-sur-Seine",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e3027851-9df1-4d2b-bdcf-f405a7234994.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 89,
          "rating": 4.34,
          "address": "Neuilly-sur-Seine, Île-de-France, France",
          "price": {
            "rate": 68,
            "currency": "USD",
            "total": 68,
            "priceItems": [
              {
                "amount": 55
              },
              {
                "amount": 1
              },
              {
                "amount": 9
              },
              {
                "amount": 3
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen"
          ],
          "name": "Small apartment close to subway 1",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/81b8b8d4-5d70-4ade-94c0-d1602a1476cf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/21f5e545-d697-4f72-a5b7-c84b65b25571.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/58dde851-36a5-4e26-acd1-2688c02a6719.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/37abf6a9-c134-40b9-89f5-c22f0184e4b2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/582c2594-aec6-41b5-8c4d-80c20d13ea4e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/e4eeb59e-ba4b-4d56-8323-d14a2e34d013.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/f71b4dde-6303-4266-aa83-72603d1e9d16.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/cbc4659f-e28f-4308-957b-3ae2c199d5a9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/eda298f3-7377-4abf-ba44-da9948529489.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/e9466602-4c66-4380-a244-f50ef5bb348b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/9531680d-a8f9-448d-8151-18e9743b275d.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/631708056804155314",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7ddbcdd5-4f5e-4921-a354-54183c6db1fa.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 101,
          "rating": 4.71,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 81,
            "currency": "USD",
            "total": 81,
            "priceItems": [
              {
                "amount": 61
              },
              {
                "amount": 5
              },
              {
                "amount": 11
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Charming 17m2 room in Paris/lovely room Paris",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/fab1f719-a6ea-47ff-90c3-df7abeddb325.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/64e69e7a-50be-4ddf-9013-e0f53e7115de.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/2c1fcb95-7cca-4f34-a0c8-3e02029460b0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/6c9a69dc-3b1d-4991-b604-d563f7a8aadc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/74aef3de-1ad8-401e-8300-b433d40adc23.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/57b49f6a-890b-4a51-9fec-d47d22e3380d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/5e89c902-95ae-46c7-a262-8a89cfa32368.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/53331119",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d7d51b3f-b1f1-4e6d-9be0-f7246ef20c04.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 139,
          "rating": 4.93,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 92,
            "currency": "USD",
            "total": 92,
            "priceItems": [
              {
                "amount": 56
              },
              {
                "amount": 19
              },
              {
                "amount": 13
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Private room in Caroline's apartment",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/49c8d4fe-efa2-46d1-a6b9-8c7f6e5a4f4b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/b562f171-c862-46c4-9611-5514abaf6f83.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/4e370a7c-6a7c-4db0-a1e7-2a1b4a2ce9cc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/29e06ebe-0bea-4e21-b3c5-5b191e71ef59.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/628d118e-3b4c-4867-9312-73e24784484f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/5bca5f6a-af51-459c-a8f3-db8aed4fa239.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/ed670a86-f6d2-43fe-a34a-39972f5f2b69.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/4093c591-47a2-4ac8-8f48-885fe7f61448.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/5fb6ec59-3594-4b3d-a08a-bb0236781e9a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/f12346b7-9bbf-40c5-a3dc-0b0fa31effcb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/111aff20-1441-4c92-a913-a43d81c8a133.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/ea3af973-78c0-4634-bf8c-b0c4ca9cf8d9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/96474160-9afd-433e-87a4-d152fefee715.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/810b8851-b5e2-4e71-a108-1f7bd32df07c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/e9c9fa2b-9162-4f18-b379-66188df29927.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/a5bd7c66-4be1-47f6-bc4a-b84530a6c308.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/264e67f6-63a1-48a9-a38d-30b63e9ca1c8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6cbb46e9-fcaf-4bd7-85e8-28ba51f31bf6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6379aa5f-dca5-42a2-8e39-5803cba9acf0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d1bbab39-44b5-46ac-a0db-0338227074b8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fa7e6bf5-fd6c-4700-8597-fd9dd530d4c5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/da602e93-deed-4b42-a14b-9bc527e26f3f.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/781595528039652002",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/8fb38963-2b39-40b4-b02e-d5fb9b3e8b77.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 15,
          "rating": 4.4,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 134,
            "currency": "USD",
            "total": 134,
            "priceItems": [
              {
                "amount": 129
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Wifi"
          ],
          "name": "Chambre d 'Hôtel",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-781595528039652002/original/5a75138d-98b0-4492-acd6-9639958ebb17.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/c5a74a30-3ec6-434b-8e60-354b9530c338.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c32547e-ddce-4e30-a91b-b0a4a92cd851.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c7cbd627-168b-4f29-8493-8d7f4fb41cb3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-781595528039652002/original/6faccb6d-7ca1-4acd-8280-da67217220c2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-781595528039652002/original/332e5c70-0431-4200-bf5d-478787f3e2db.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/406891",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/9f1a21f1-1212-4216-a59f-860e2b84a530.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 295,
          "rating": 4.54,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 92,
            "currency": "USD",
            "total": 92,
            "priceItems": [
              {
                "amount": 54
              },
              {
                "amount": 22
              },
              {
                "amount": 13
              },
              {
                "amount": 3
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "PRIVATE ROOM IN MY CHARMING FLAT",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/5053319/bcac8b6a_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053393/554ba421_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15722223/6fff0ddd_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053292/2542fbc1_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053315/b7f2d2f6_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053328/a2bfcbf0_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15723852/64cc8a4d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15722045/7405321d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15723740/a88fcb49_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053400/d29878df_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053396/c63c758e_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5053390/40882958_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15721950/480e2f54_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15722141/6d9d31b3_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15722463/05566080_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15722373/127e7ccf_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15722486/9a367bf8_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15723779/b8d3af09_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15723787/3bbfc684_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15723939/9fc54ff8_original.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/786694",
          "city": "Vincennes",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cfaa0e83-1376-4a42-86fa-968e914f82e3.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 123,
          "rating": 4.91,
          "address": "Vincennes, Île-de-France, France",
          "price": {
            "rate": 100,
            "currency": "USD",
            "total": 100,
            "priceItems": [
              {
                "amount": 81
              },
              {
                "amount": 14
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Bedroom in Vincennes near Paris",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/d2cef07b-e3c6-45ca-8689-5a0308238472.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/241f9a8d-ccd8-47c4-9b8f-5a2c3400d085.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/73e2d18c-5140-47f0-9194-88196ee9b2b3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/40d85a4a-317e-4606-9d4f-e42aa7de34ab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dbf471c9-ffa9-4c90-ab75-8f228ce431fd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/60d44f26-8b4f-44cb-bd3d-681c9c4c317a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9f9a1265-6054-417f-9f94-5e00d29e12f5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f49b2774-4722-4f33-a9ed-eedc555f6d0c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/635d7fe5-a868-4e9a-8245-6121be4381f8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8e08ea10-6d72-4922-b242-1b30a3284bc8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7d3d68a4-0e71-4056-a9b7-9a68c520e82c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2787876-9de5-4f0d-82b0-796e4519a0c9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c634e812-917d-43ad-9bd4-6e31b0d5f721.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/23547316",
          "city": "Arcueil",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/797e2881-d5b7-4faf-b794-176e7d164ec9.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 281,
          "rating": 4.97,
          "address": "Arcueil, Île-de-France, France",
          "price": {
            "rate": 73,
            "currency": "USD",
            "total": 73,
            "priceItems": [
              {
                "amount": 59
              },
              {
                "amount": 10
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Free parking",
            "Washer"
          ],
          "name": "Nice flat in the near suburbs of Paris (Arcueil)",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-23547316/original/5c06984b-1d36-42df-b50c-1326ab512664.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2e7f97e-804e-4e37-9f36-7788fb561041.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bee2680e-537c-4255-b8a4-a04b05952d01.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-23547316/original/a27d1bc9-cdbc-4d0b-a89d-621f8cd2175a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/2ce8b475-a997-4bea-ac04-0527299bcd7c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5a535af0-c96e-4b37-895f-2d03adc000c5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-23547316/original/9548a646-8cfa-44db-9835-a7f216268912.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/4a971ac8-3788-4e82-868a-1880a7250f33.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/59a5c3e0-4b05-4d06-9799-dc47efaec2b1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81a4f8cd-d706-4501-9637-f7716ccdb79c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bec64fbb-5988-4ac6-b24e-93b97e6b0a1a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-23547316/original/f8666337-eb6c-422e-9e0a-88576faec5ab.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-23547316/original/7e8b76f5-671b-4b63-bf2d-ada6a59d0307.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-23547316/original/22a14ec6-1034-4865-b28b-64a216cc3abd.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/581846164167098371",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d9aceef5-0423-421d-91ec-550f975b59d3.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 115,
          "rating": 4.61,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 75,
            "currency": "USD",
            "total": 75,
            "priceItems": [
              {
                "amount": 59
              },
              {
                "amount": 2
              },
              {
                "amount": 10
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen"
          ],
          "name": "Charmante chambre Paris 14 m²/Lovely Room in Paris",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "bed": 0,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/4c51914c-ab17-4975-b59b-194479a7f802.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/0834f489-c6f3-4692-b988-e8c8daa857f1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/966d2436-340c-435f-acfb-72b99adbf947.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/73ac8f4f-676d-4eb7-a7ad-36f2bd9c6d09.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/e88fed97-7202-4bcb-8efd-c161d579f89c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/ab8ce564-6399-45db-8f91-ee3f5401c814.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/a123580a-fd3a-4649-8ad1-b9e21d59e52d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/52bcfe08-9d82-4611-8e95-a04e92d74c65.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-581846164167098371/original/84e86638-379e-4525-9969-839b03e6c7b0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/df18f344-4840-4b7b-a314-9b695f381b57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/23dddc4b-cf79-4e9b-84c0-fc24ad52abe0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/21b49b0a-e1c6-4a3c-8e8e-0bf2739a90fc.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/878716782374498779",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/62de5303-68b9-4eb0-9e7d-8d4b17d79814.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 17,
          "rating": 4.88,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 80,
            "currency": "USD",
            "total": 80,
            "priceItems": [
              {
                "amount": 65
              },
              {
                "amount": 11
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Chambre d’Appart familial",
          "bathrooms": 0.5,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/d525fb28-fbab-464d-ac9c-b620a7f8f1c0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/7fc192f1-942c-49dd-960e-935a86729441.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/a86c807b-c0c1-4c8f-adb4-1e9f6ffab1f8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/0c576e24-f8f8-4f95-a847-bee033a0f733.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/5d35b16f-1c9f-48fa-a0d7-dfbbd77d17d1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/716d2dab-cc0c-4e07-836a-ea1922f3009a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c0b3e29d-d39f-45c6-aebe-a62908c19145.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/5b642410-e72f-4174-aed4-106cc031ff94.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/244280a1-dec9-40f9-aaa1-65f3254dd240.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/2a1e1c3e-bcd3-4af1-98b9-5c0a10f6c847.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878716782374498779/original/3a3a0d37-6f50-457e-9b54-4033b38a2768.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/13741136",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/347fb763-f44d-4efc-9b88-1f7985c98504.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 401,
          "rating": 4.92,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 105,
            "currency": "USD",
            "total": 105,
            "priceItems": [
              {
                "amount": 86
              },
              {
                "amount": 14
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Nice and warm room in Paris",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/dbf0176e-49ac-4159-8164-a421782013ce.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/794831cb-98ab-4243-a719-cda33cf44f1e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/334ecbe5-d49f-4403-a4ba-e9d6a485ee81.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4e8acb70-2839-4a40-8bb4-33257e2c4a50.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/2500361",
          "city": "Boulogne-Billancourt",
          "hostThumbnail": "https://a0.muscache.com/im/users/12797376/profile_pic/1410034523/original.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 481,
          "rating": 4.47,
          "address": "Boulogne-Billancourt, Île-de-France, France",
          "price": {
            "rate": 70,
            "currency": "USD",
            "total": 70,
            "priceItems": [
              {
                "amount": 59
              },
              {
                "amount": 10
              },
              {
                "amount": 1
              }
            ]
          },
          "previewAmenities": [
            "Wifi"
          ],
          "name": "Independent room",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/47668947/9372bd9d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47668753/ab429ae7_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47668821/352d2a03_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669092/51ec3c74_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669130/f4cfd0b0_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669210/1eeded7a_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669331/5b88f921_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669376/85788a13_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669406/4e59f0ae_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669437/1e51cd04_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669486/9c151e3d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669513/828bd32f_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669587/35e306f2_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669730/71f45307_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/47669800/9badf630_original.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/43776932",
          "city": "Pantin",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e3faf667-f87a-4c94-882e-f9c8381994f6.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 33,
          "rating": 4.97,
          "address": "Pantin, Île-de-France, France",
          "price": {
            "rate": 86,
            "currency": "USD",
            "total": 86,
            "priceItems": [
              {
                "amount": 70
              },
              {
                "amount": 12
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen"
          ],
          "name": "Charming room in a bright apartment",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/c47b13d6-6556-4ef6-9e1b-06dcdca1ce5a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cac2255d-7c42-44a2-8778-3f475d31950d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/de2b8917-b667-4d26-9016-9c35bae7fbca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e6cdeb7a-422f-4895-a10d-9f2f1a4c8496.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4abbec2b-ba99-405d-bd3a-331fe6ec8e33.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d2d30cae-3c5f-49ba-abf1-d54f196e4737.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4c447df0-0606-4225-b4e5-0af5cf92f9b2.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/886743704278524291",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/62de5303-68b9-4eb0-9e7d-8d4b17d79814.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 9,
          "rating": 5,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 80,
            "currency": "USD",
            "total": 80,
            "priceItems": [
              {
                "amount": 65
              },
              {
                "amount": 11
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Chambre d’appart familial",
          "bathrooms": 0.5,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/4528c218-1d23-44a6-91f3-805161eef04d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-886743704278524291/original/aab25ace-c969-4bc6-ba10-46cdf650ba15.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-886743704278524291/original/34011723-718c-4bbe-a93a-c7e4c9f9dbb9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-886743704278524291/original/b97d161e-3993-4eae-9cee-d299b0aa5d63.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-886743704278524291/original/5121478b-e473-41e8-9aa1-ae11dc8217b3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-886743704278524291/original/3fe2f785-db8d-443c-86cc-d522e7f7795a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-886743704278524291/original/d181b3fc-d58a-4c52-8710-d5e01f00d842.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/59d9171d-9659-4b39-874f-f588b7fa618c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e6b92e63-d879-40f4-b516-e516f5815579.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/56b4e961-594e-445d-b45d-b76d98802564.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/9975524",
          "city": "Saint-Denis",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/b34f6c73-0b90-4c35-b4fd-ab3e0d1e0e0d.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 695,
          "rating": 4.62,
          "address": "Saint-Denis, Île-de-France, France",
          "price": {
            "rate": 46,
            "currency": "USD",
            "total": 46,
            "priceItems": [
              {
                "amount": 38
              },
              {
                "amount": 6
              },
              {
                "amount": 2
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Shared space",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/d29592d6-1ae6-443c-b9fc-1333ae4b38b0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/43f160c7-585d-4441-b6d3-cd4fbdeb6a43.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ecbd505f-92c1-4f0c-a1ab-3a3f2eabd553.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b837618f-700a-429e-99fe-573bb04b3a0d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/074755ab-384d-4ce2-8211-7503ebcb9f26.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a7e446f1-f9b8-4b2f-ad87-98cfa08c2364.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11e66f46-f4fd-4b51-b94c-0db32fcd273c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/38a2076a-3672-4dad-81c0-fd75550089c2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f984ef56-c57d-4836-a4e0-f50a3b1c064b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8991360-def2-4a77-83de-ea329b338d4d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bc7c0bb1-b9f1-4e88-a8f1-d7780d1ed5cf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1d15c2de-07eb-4325-9d46-8864a1cd4142.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7a0c9bac-bf5c-407b-b6bb-6570d78956d6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e7c11f0f-245d-452b-bf9a-ff98d83ea830.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/67e7517a-fd4d-46fe-afae-4924beff9f5a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f4272496-6c4b-47ce-bcc6-995c3c5a93c7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1c13f3f0-9dd0-4d85-afc2-5faf91dcd386.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b8997cbe-c00d-47e1-a396-d318ea028b72.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8a935926-1204-42ed-9a7e-d7eb65e10e2b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0fe37b00-3a21-442c-ac94-b14ee2a2ceae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9024ea7a-7426-415a-a131-22183e297cef.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f6458e6f-0d5b-4d2a-bed2-d9bbb3a80e9b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e50261a6-b67a-4fc1-b188-e7e63d0ec80a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/08379909-3613-453b-93e8-2eece2640271.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/86317b86-4692-4c4c-b598-dfcf7f942d02.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b69e81d9-b336-4494-93d6-9f651f63988d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/537d8147-ebf3-41c2-b099-8a0bf9b254f7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/caba9b50-83f2-4104-bb66-d30b619cbd42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bd7d3b9d-9f04-4fbf-9fe1-0ecd3e460584.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/eac3d16c-44ac-468c-ba19-f66f3ec8078d.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/856528235776080015",
          "city": "Montreuil",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5739c64d-7871-4242-b03d-ba2ef7b168b2.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 9,
          "rating": 4.78,
          "address": "Montreuil, Île-de-France, France",
          "price": {
            "rate": 65,
            "currency": "USD",
            "total": 65,
            "priceItems": [
              {
                "amount": 53
              },
              {
                "amount": 9
              },
              {
                "amount": 3
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen"
          ],
          "name": "Warm studio, Mairie de Montreuil district",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-856528235776080015/original/655aba3a-f421-459f-abec-2c8938b5f1a0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-856528235776080015/original/012b4852-75d4-4742-b2c7-1657f63398c3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-856528235776080015/original/b09e5da4-427f-4ab9-bd19-206703221ba9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-856528235776080015/original/5da5c1da-4956-406b-a8bc-cae1a5e0bae4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-856528235776080015/original/a27b30dc-86af-40f1-8aea-9a3f95e30f86.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-856528235776080015/original/e2457ca5-f5a1-4de4-9345-3e38da9cb3c9.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/679903295805654877",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-422282025/original/45078ded-3871-48bf-9e48-e598d1751535.jpeg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 34,
          "rating": 4.85,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 100,
            "currency": "USD",
            "total": 100,
            "priceItems": [
              {
                "amount": 75
              },
              {
                "amount": 6
              },
              {
                "amount": 14
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen"
          ],
          "name": "Fully equipped apartment for you",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/42f6b327-2a63-4a08-bd67-10a091d2adeb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-679903295805654877/original/a62bc0ec-b3e8-4edc-ada3-9c9ad4c4b27a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/0c386519-c2a0-4447-be78-635e2ca9deeb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-679903295805654877/original/0a35ef6b-5ce4-456f-932a-134eab5db935.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/c29aac4a-64f0-410e-b1f7-c327cf0789de.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29582603-4bde-4f08-bff5-ea7510da36a7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4eb57029-f3f1-45d4-a168-725c2f65a2c9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-679903295805654877/original/ff6f8ad9-ce7c-4865-9d37-f3e5aae14137.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-679903295805654877/original/23e790b6-827c-48ad-aca3-382b9596f5a7.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/14970062",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a9f2509e-7dad-4646-b133-87435add6047.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 99,
          "rating": 4.93,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 84,
            "currency": "USD",
            "total": 84,
            "priceItems": [
              {
                "amount": 50
              },
              {
                "amount": 19
              },
              {
                "amount": 12
              },
              {
                "amount": 3
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Chambre privée /Paris 20",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 2,
          "images": [
            "https://a0.muscache.com/im/pictures/eab79083-bcbb-4a6f-9d74-7220244fc60f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fb49d010-edd3-4e74-92fb-a0e932df52dc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cfede716-dd04-4b30-89c5-1df968484c3f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/67fcc1f3-b212-4ff7-b56c-848d807ec34c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e6427873-9307-4e88-b199-1a462bc7b032.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/55cae5eb-6ac3-4fe2-a9f9-9c0a01e15aa2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/92e0f97a-e83e-47c2-b16f-a84edf1efb39.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/01345a32-3819-440d-b5b1-33f7d4b54b51.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2dc1eacc-c731-496c-81d3-cc901143e0ce.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f01fa199-5ce7-45fd-9009-8ef6e152aae0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6e95976d-b90d-407e-abbb-425ca780154e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f42bf314-3b95-42e8-b358-0711bdfa8527.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7d76829d-bc6b-453c-a30b-2ce47470ac1f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7d0f5172-465e-4e0a-a882-1a276862498c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ce864e9e-df30-44e5-995b-d974f468b872.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b288df6a-6381-4bad-927b-2108e320360c.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/2642991",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-3904491/original/3b5bc385-b2e7-40ee-9ca7-7af28b00579c.jpeg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 444,
          "rating": 4.55,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 96,
            "currency": "USD",
            "total": 96,
            "priceItems": [
              {
                "amount": 64
              },
              {
                "amount": 15
              },
              {
                "amount": 13
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Charming Room in an Inspiring Flat ",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/54ef26e1-d380-45e7-8239-3871ad05def4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/51715c44-0b7c-4261-8bcf-8a284221dc24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/8412c67e-adc2-46ab-b260-198749cc23fa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/997b99be-56f4-4017-a330-ffaac9746b05.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/01a7740a-4afb-4181-a639-47ed03bfacc3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/8e89fcfd-7aa8-4143-a1dd-b725c14ece3d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/28a90d37-974c-4425-91a0-bb6d16b20e78.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/a97d99e6-36db-4f61-984a-3520edd5c682.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/8adb3bb9-4b32-48a9-be2b-6b3859171e9c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/fa3a7f82-78fb-4de3-8ccb-1ac2c5a6f61c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/e2480d2a-ca5e-4c04-9aeb-5cbc997813a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/7477c4ef-debb-450a-a547-de80743edd21.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/ef8d20fa-990c-4a3a-b831-103d8c67e463.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/34579fde-ba72-4da5-96fa-6439de4f6e90.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/242d4494-0ff4-4f66-a560-afe26da7aa54.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/9ae394b9-7157-484a-b21c-4fa9a8587409.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/4246ef5f-c7ef-4e13-a709-a3ce3ec2477a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/e9b5552c-c5f9-4e9b-a966-51f793e2947d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/1fa95848-9919-4edb-8841-bfeaa7baad0f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/airflow/Hosting-2642991/original/eb2faf37-e4e7-4608-87f4-7cd7ea2cc008.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37682762/b021a26c_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37682714/5cf5b8f9_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37682727/641b370d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37682738/49ba24e2_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37682751/065b577c_original.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/49922178",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/3b5869fa-3be1-4f28-96c9-bacd3861a0f6.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 65,
          "rating": 4.74,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 105,
            "currency": "USD",
            "total": 105,
            "priceItems": [
              {
                "amount": 86
              },
              {
                "amount": 14
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "Cosy apartment In NATION AREA",
          "bathrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/5eb95035-3516-4c89-87ab-88c393a5cb07.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d2c15df-e684-4bf1-96d1-9c065620a54d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4e1f444f-9f68-4fe3-8ad6-b2515f0dae1b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/56c9cee0-0ca3-45a3-8eb6-527fb9ada6bf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/70a1f455-52af-4ddd-a51a-b0248e013b06.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/907029584301500107",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-518139485/original/bdccc020-81d5-4a03-b999-1f1ce4823978.jpeg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 0,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 157,
            "currency": "USD",
            "total": 157,
            "priceItems": [
              {
                "amount": 108
              },
              {
                "amount": 22
              },
              {
                "amount": 22
              },
              {
                "amount": 5
              }
            ]
          },
          "previewAmenities": [
            "Kitchen",
            "Washer"
          ],
          "name": "Saint-Martin studio",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-907029584301500107/original/6068d1ad-8832-4993-b211-cdb9b1d240fe.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-907029584301500107/original/2b97d26d-4cc5-43d0-9ef9-09dbe9602aea.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-907029584301500107/original/4d697a8a-5995-4e37-8137-f44a50fedde2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-907029584301500107/original/610dec67-989a-4350-a236-cba9bc38a47e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-907029584301500107/original/325f53b2-05c5-40b2-a8c9-51e8b010593b.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/50219497",
          "city": "Paris",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/06712e67-202e-4910-b126-86f1239c4b70.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 188,
          "rating": 4.25,
          "address": "Paris, Île-de-France, France",
          "price": {
            "rate": 103,
            "currency": "USD",
            "total": 103,
            "priceItems": [
              {
                "amount": 66
              },
              {
                "amount": 19
              },
              {
                "amount": 14
              },
              {
                "amount": 4
              }
            ]
          },
          "previewAmenities": [
            "Kitchen"
          ],
          "name": "Studette Private  Room in Pigalle Montmartre",
          "bathrooms": 0.5,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/35994085/990877b2_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/85274532/baa541ec_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/85274327/8242baaa_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/85274011/8c682bcb_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17646295/67b61227_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/28531687/434ba7f5_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17646254/c1b84bcc_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/64761639/50376b29_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/19029425/8813d3cc_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36180363/8613a4e5_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36180494/5aa68183_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019503/b3d68f9d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/35994332/e450ee01_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019520/966977b7_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019573/e1afcb8c_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019927/272feaa6_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019352/45f2ffc1_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019949/0faf5e55_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/28531610/5796199d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17646167/31c3da9d_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/19030168/8c8b4fe1_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/28531766/b44b24b0_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20652664/cd1a31ce_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/36019606/5a53896b_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17646680/7c144f79_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/19029446/33f799a9_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17649045/e2d7a5d2_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17649253/08b3760f_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/17648970/b3afe103_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/21468237/f274e751_original.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/583712369145136127",
          "city": "Boulogne-Billancourt",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/67e94ef8-a3a7-4603-9393-7904d1c7f4fa.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 48,
          "rating": 4.88,
          "address": "Boulogne-Billancourt, Île-de-France, France",
          "price": {
            "rate": 119,
            "currency": "USD",
            "total": 119,
            "priceItems": [
              {
                "amount": 97
              },
              {
                "amount": 16
              },
              {
                "amount": 6
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "name": "🍿Welcome to Studio Cosy Netflix & chill 🎬",
          "bathrooms": 1,
          "bedrooms": 0,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/53a95d68-f714-44c9-8426-3054d3277cf0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cf5f9890-c279-4bf6-b61a-cea28885d8fd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d25d82c9-b078-4c59-8ef1-286c8f453a5a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d06a09c8-65fe-490c-8a03-69b5c88757fa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4888618a-32c8-4dcf-876e-e136aaacd06e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0e2258e7-1d66-490a-bdeb-e15168612168.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ea22dae3-f93d-41d5-8ada-d0600830d109.jpg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/863837221795538309",
          "city": "Montmagny",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/98f81de7-2225-4b62-95bc-c6f80aedbf94.jpg?aki_policy=profile_x_medium",
          "persons": 2,
          "reviewsCount": 5,
          "rating": 4.6,
          "address": "Montmagny, Île-de-France, France",
          "price": {
            "rate": 56,
            "currency": "USD",
            "total": 56,
            "priceItems": [
              {
                "amount": 45
              },
              {
                "amount": 8
              },
              {
                "amount": 3
              }
            ]
          },
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Free parking"
          ],
          "name": "Studio Cosy",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/2fd1b36a-9e6e-446a-b57c-3a6cfc81f7fe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-863837221795538309/original/22eb2e52-0702-484c-9f33-7bb6878acc22.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-863837221795538309/original/a3b21e71-5600-46c2-a7ad-da92f45dedce.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-863837221795538309/original/4f24bb83-2e37-4f94-87c2-b341c470692a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-863837221795538309/original/f9b4feb0-9868-4fe9-88e3-7752760fc21c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-863837221795538309/original/e27e7e87-9776-4dc0-ab38-ad885d6fa270.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-863837221795538309/original/0cc0a6d9-d9d5-4183-b633-19bfe7d1dc3a.jpeg?im_w=720"
          ]
        },
        {
          "url": "https://www.airbnb.com/rooms/53897396",
          "city": "Choisy-le-Roi",
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5c2e26e3-beab-4024-adea-6d7876f6f643.jpg?aki_policy=profile_x_medium",
          "persons": 1,
          "reviewsCount": 31,
          "rating": 4.61,
          "address": "Choisy-le-Roi, Île-de-France, France",
          "price": {
            "rate": 38,
            "currency": "USD",
            "total": 38,
            "priceItems": [
              {
                "amount": 27
              },
              {
                "amount": 4
              },
              {
                "amount": 5
              },
              {
                "amount": 2
              }
            ]
          },
          "previewAmenities": [
            "Kitchen",
            "Washer"
          ],
          "name": "Private room for women 6 km from Orly airport",
          "bathrooms": 1,
          "bedrooms": 1,
          "bed": 1,
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53897396/original/7419d7a2-bdb5-4d6f-9b40-275f0b49d4db.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53897396/original/12f97bec-7935-41db-b5ee-267c1906fe52.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53897396/original/f5c3fc33-97e4-4b6b-a9aa-313e426a1445.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53897396/original/fb7c9ef6-c050-47b8-aa99-7579e7fbcacc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53897396/original/ad9df68d-52f6-4710-aa55-ddc6a9a9981f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/94590324-c7c3-43eb-ac8b-6a73f718f48d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/787f3234-ad92-483c-8437-99c6d2ff74dd.jpg?im_w=720"
          ]
        }
      ]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevents instant refresh
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log('formObj:', formObj); // delete later
    // this.getAirbnbs(formObj);
  }

  getAirbnbs = (form) => {
    let requestURL = `${process.env.REACT_APP_SERVER}/airbnb?location=${form.location}&checkin=${form.checkin}&checkout=${form.checkout}&adults=${form.adults}&children=${form.children}&pets=${form.pets}&page=1`;
    console.log(requestURL);
    axios.get(requestURL)
      .then(response => {
        console.log(response);
        // Only stores first 10 airbnbs (haven't tested yet)
        this.setState({ airbnbData: response.data.splice(10), error: ''}, () => console.log('airbnbData:', this.state.airbnbData));
      })
      .catch(err => this.setState({ error: 'could not fetch airbnbs' }));
  }

  render() {
    const { trip, editAirbnb } = this.props;
    return (
      <div className="airbnb">
        {this.state.error && <Alert>{this.state.error}</Alert>}
        <Card className="airbnb-form" style={{ width: '25rem' }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              {/* TODO: Might delete this location formgroup later */}
              <Form.Group>
                <Form.Label>Find An Airbnb</Form.Label>
                <Form.Control type="text" placeholder="Enter location name" name='location' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Check in date</Form.Label>
                <Form.Control type="date" placeholder="2023-01-01" name='checkin' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Check out date</Form.Label>
                <Form.Control type="date" placeholder="2023-01-02" name='checkout' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of adults</Form.Label>
                <Form.Control type="text" defaultValue="1" name='adults' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of children</Form.Label>
                <Form.Control type="text" defaultValue="0" name='children' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of pets</Form.Label>
                <Form.Control type="text" defaultValue="0" name='pets' required />
              </Form.Group>
              <Button variant="primary" type="submit">Find Airbnbs</Button>
            </Form>
          </Card.Body>
        </Card>

        <Row>
          {this.state.airbnbData.length > 0 && this.state.airbnbData.map(airbnb =>
            <Col key={airbnb.url}>
              <AirbnbCard airbnb={airbnb} trip={trip} editAirbnb={editAirbnb}/>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

export default Airbnb;