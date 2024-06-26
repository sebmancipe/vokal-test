import { Color, Room, Style } from "../../pages/Showcase/components/types";
import { ImageResource, ImagesRepository } from "./types";

export class ImagesService {
    private static readonly images: ImagesRepository = {
        [Color.WHITE]: {
            [Style.MODERN]: {
                [Room.KITCHEN]: [
                    {
                        src: 'https://i.pinimg.com/736x/93/a6/d4/93a6d42741db918521118681d03d87ce.jpg',
                        title: 'white_modern_kitchen_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/46/14/0d/46140d558baa47208b1955becf100005.jpg',
                        title: 'white_modern_kitchen_2'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/8b/29/3a/8b293aa11e4d5d2a68704b40610db9ca.jpg',
                        title: 'white_modern_kitchen_3'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/4f/db/4a/4fdb4a0d3bce964ac0c6193d9d90d496.jpg',
                        title: 'white_modern_kitchen_4'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/65/bc/4b/65bc4b7b01d6b4276d07551be28c286a.jpg',
                        title: 'white_modern_kitchen_5'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/b9/95/1a/b9951a6f061e00ad89797df351c5246d.jpg',
                        title: 'white_modern_kitchen_6'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/fe/e5/c4/fee5c40db55c846983768249a7d0007c.jpg',
                        title: 'white_modern_kitchen_7'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/39/ec/67/39ec672569f776b5dd2603317152f978.jpg',
                        title: 'white_modern_kitchen_8'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/04/13/cf/0413cf2fac32a9785c9895aca0244b36.jpg',
                        title: 'white_modern_kitchen_9'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/4b/4b/22/4b4b226d4f4f35adc766a2801b29bd83.jpg',
                        title: 'white_modern_kitchen_10'
                    },
                ],
                [Room.LIVING_ROOM]: [
                    {
                        src: 'https://i.pinimg.com/564x/a9/38/31/a938314e688f56ee245c458e0d5c24c1.jpg',
                        title: 'white_modern_living_room_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/d2/72/18/d27218ba44c6c30b17eda771a7383ce3.jpg',
                        title: 'white_modern_living_room_2'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/ac/1c/5c/ac1c5c17b7cb6f8c27f6498ef4a2bd94.jpg',
                        title: 'white_modern_living_room_3'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/f2/24/4c/f2244c7054d9a537441c16ecaadad2e8.jpg',
                        title: 'white_modern_living_room_4'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/51/0a/c5/510ac58e94cda01ac018d2bd316be4e1.jpg',
                        title: 'white_modern_living_room_5'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/12/88/88/12888803a1955917ef14de37e2cc0c23.jpg',
                        title: 'white_modern_living_room_6'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/ca/1e/cb/ca1ecbeb1ed204894727d66604aad84f.jpg',
                        title: 'white_modern_living_room_7'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/c7/8a/2c/c78a2c04bd7561c76db1a5d7124bbc56.jpg',
                        title: 'white_modern_living_room_8'
                    },
                ],
                [Room.OFFICE]: [
                 {
                    src: 'https://i.pinimg.com/564x/ce/f8/d5/cef8d5005432e33e5ca8d1472bfa89a5.jpg',
                    title: 'white_modern_office_1'
                 },
                 {
                    src: 'https://i.pinimg.com/736x/ed/83/98/ed8398447ed30f9b9fd7238799d6889c.jpg',
                    title: 'white_modern_office_2'
                 },
                 {
                    src: 'https://i.pinimg.com/564x/00/7e/26/007e267798815b3aa8dc4fed118e392e.jpg',
                    title: 'white_modern_office_3'
                 },
                 {
                    src: 'https://i.pinimg.com/736x/9e/72/27/9e7227dd5fe0c2a004569710d95eb5e6.jpg',
                    title: 'white_modern_office_4'
                 },
                ]
            },
            [Style.TRADITIONAL]: {
               [Room.KITCHEN]: [
                    {
                        src: 'https://i.pinimg.com/736x/8c/90/87/8c9087bb6b4464cba963c89a4fd94ac7.jpg',
                        title: 'white_traditional_kitchen_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/c2/03/54/c20354082f8e81457b1bb1d2962c07e1.jpg',
                        title: 'white_traditional_kitchen_2'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/a1/d4/fb/a1d4fbacf0d5f6c830ccec0acd338ed3.jpg',
                        title: 'white_traditional_kitchen_3'
                    },
               ],
               [Room.LIVING_ROOM]: [],
               [Room.OFFICE]: [],
            }
        },
        [Color.BLACK]: {
            [Style.MODERN]: {
                [Room.KITCHEN]: [
                    {
                        src: 'https://i.pinimg.com/736x/93/a6/d4/93a6d42741db918521118681d03d87ce.jpg',
                        title: 'white_modern_kitchen_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/46/14/0d/46140d558baa47208b1955becf100005.jpg',
                        title: 'white_modern_kitchen_2'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/8b/29/3a/8b293aa11e4d5d2a68704b40610db9ca.jpg',
                        title: 'white_modern_kitchen_3'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/4f/db/4a/4fdb4a0d3bce964ac0c6193d9d90d496.jpg',
                        title: 'white_modern_kitchen_4'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/65/bc/4b/65bc4b7b01d6b4276d07551be28c286a.jpg',
                        title: 'white_modern_kitchen_5'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/b9/95/1a/b9951a6f061e00ad89797df351c5246d.jpg',
                        title: 'white_modern_kitchen_6'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/fe/e5/c4/fee5c40db55c846983768249a7d0007c.jpg',
                        title: 'white_modern_kitchen_7'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/39/ec/67/39ec672569f776b5dd2603317152f978.jpg',
                        title: 'white_modern_kitchen_8'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/04/13/cf/0413cf2fac32a9785c9895aca0244b36.jpg',
                        title: 'white_modern_kitchen_9'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/4b/4b/22/4b4b226d4f4f35adc766a2801b29bd83.jpg',
                        title: 'white_modern_kitchen_10'
                    },
                ],
                [Room.LIVING_ROOM]: [
                    {
                        src: 'https://i.pinimg.com/564x/a9/38/31/a938314e688f56ee245c458e0d5c24c1.jpg',
                        title: 'white_modern_living_room_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/d2/72/18/d27218ba44c6c30b17eda771a7383ce3.jpg',
                        title: 'white_modern_living_room_2'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/ac/1c/5c/ac1c5c17b7cb6f8c27f6498ef4a2bd94.jpg',
                        title: 'white_modern_living_room_3'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/f2/24/4c/f2244c7054d9a537441c16ecaadad2e8.jpg',
                        title: 'white_modern_living_room_4'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/51/0a/c5/510ac58e94cda01ac018d2bd316be4e1.jpg',
                        title: 'white_modern_living_room_5'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/12/88/88/12888803a1955917ef14de37e2cc0c23.jpg',
                        title: 'white_modern_living_room_6'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/ca/1e/cb/ca1ecbeb1ed204894727d66604aad84f.jpg',
                        title: 'white_modern_living_room_7'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/c7/8a/2c/c78a2c04bd7561c76db1a5d7124bbc56.jpg',
                        title: 'white_modern_living_room_8'
                    },
                ],
                [Room.OFFICE]: [
                 {
                    src: 'https://i.pinimg.com/564x/ce/f8/d5/cef8d5005432e33e5ca8d1472bfa89a5.jpg',
                    title: 'white_modern_office_1'
                 },
                 {
                    src: 'https://i.pinimg.com/736x/ed/83/98/ed8398447ed30f9b9fd7238799d6889c.jpg',
                    title: 'white_modern_office_2'
                 },
                 {
                    src: 'https://i.pinimg.com/564x/00/7e/26/007e267798815b3aa8dc4fed118e392e.jpg',
                    title: 'white_modern_office_3'
                 },
                 {
                    src: 'https://i.pinimg.com/736x/9e/72/27/9e7227dd5fe0c2a004569710d95eb5e6.jpg',
                    title: 'white_modern_office_4'
                 },
                ]
            },
            [Style.TRADITIONAL]: {
               [Room.KITCHEN]: [
                    {
                        src: 'https://i.pinimg.com/736x/8c/90/87/8c9087bb6b4464cba963c89a4fd94ac7.jpg',
                        title: 'white_traditional_kitchen_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/c2/03/54/c20354082f8e81457b1bb1d2962c07e1.jpg',
                        title: 'white_traditional_kitchen_2'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/a1/d4/fb/a1d4fbacf0d5f6c830ccec0acd338ed3.jpg',
                        title: 'white_traditional_kitchen_3'
                    },
               ],
               [Room.LIVING_ROOM]: [],
               [Room.OFFICE]: [],
            }
        },
        [Color.BLUE]: {
            [Style.MODERN]: {
                [Room.KITCHEN]: [
                    {
                        src: 'https://i.pinimg.com/736x/93/a6/d4/93a6d42741db918521118681d03d87ce.jpg',
                        title: 'white_modern_kitchen_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/46/14/0d/46140d558baa47208b1955becf100005.jpg',
                        title: 'white_modern_kitchen_2'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/8b/29/3a/8b293aa11e4d5d2a68704b40610db9ca.jpg',
                        title: 'white_modern_kitchen_3'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/4f/db/4a/4fdb4a0d3bce964ac0c6193d9d90d496.jpg',
                        title: 'white_modern_kitchen_4'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/65/bc/4b/65bc4b7b01d6b4276d07551be28c286a.jpg',
                        title: 'white_modern_kitchen_5'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/b9/95/1a/b9951a6f061e00ad89797df351c5246d.jpg',
                        title: 'white_modern_kitchen_6'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/fe/e5/c4/fee5c40db55c846983768249a7d0007c.jpg',
                        title: 'white_modern_kitchen_7'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/39/ec/67/39ec672569f776b5dd2603317152f978.jpg',
                        title: 'white_modern_kitchen_8'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/04/13/cf/0413cf2fac32a9785c9895aca0244b36.jpg',
                        title: 'white_modern_kitchen_9'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/4b/4b/22/4b4b226d4f4f35adc766a2801b29bd83.jpg',
                        title: 'white_modern_kitchen_10'
                    },
                ],
                [Room.LIVING_ROOM]: [
                    {
                        src: 'https://i.pinimg.com/564x/a9/38/31/a938314e688f56ee245c458e0d5c24c1.jpg',
                        title: 'white_modern_living_room_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/d2/72/18/d27218ba44c6c30b17eda771a7383ce3.jpg',
                        title: 'white_modern_living_room_2'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/ac/1c/5c/ac1c5c17b7cb6f8c27f6498ef4a2bd94.jpg',
                        title: 'white_modern_living_room_3'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/f2/24/4c/f2244c7054d9a537441c16ecaadad2e8.jpg',
                        title: 'white_modern_living_room_4'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/51/0a/c5/510ac58e94cda01ac018d2bd316be4e1.jpg',
                        title: 'white_modern_living_room_5'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/12/88/88/12888803a1955917ef14de37e2cc0c23.jpg',
                        title: 'white_modern_living_room_6'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/ca/1e/cb/ca1ecbeb1ed204894727d66604aad84f.jpg',
                        title: 'white_modern_living_room_7'
                    },
                    {
                        src: 'https://i.pinimg.com/736x/c7/8a/2c/c78a2c04bd7561c76db1a5d7124bbc56.jpg',
                        title: 'white_modern_living_room_8'
                    },
                ],
                [Room.OFFICE]: [
                 {
                    src: 'https://i.pinimg.com/564x/ce/f8/d5/cef8d5005432e33e5ca8d1472bfa89a5.jpg',
                    title: 'white_modern_office_1'
                 },
                 {
                    src: 'https://i.pinimg.com/736x/ed/83/98/ed8398447ed30f9b9fd7238799d6889c.jpg',
                    title: 'white_modern_office_2'
                 },
                 {
                    src: 'https://i.pinimg.com/564x/00/7e/26/007e267798815b3aa8dc4fed118e392e.jpg',
                    title: 'white_modern_office_3'
                 },
                 {
                    src: 'https://i.pinimg.com/736x/9e/72/27/9e7227dd5fe0c2a004569710d95eb5e6.jpg',
                    title: 'white_modern_office_4'
                 },
                ]
            },
            [Style.TRADITIONAL]: {
               [Room.KITCHEN]: [
                    {
                        src: 'https://i.pinimg.com/736x/8c/90/87/8c9087bb6b4464cba963c89a4fd94ac7.jpg',
                        title: 'white_traditional_kitchen_1'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/c2/03/54/c20354082f8e81457b1bb1d2962c07e1.jpg',
                        title: 'white_traditional_kitchen_2'
                    },
                    {
                        src: 'https://i.pinimg.com/564x/a1/d4/fb/a1d4fbacf0d5f6c830ccec0acd338ed3.jpg',
                        title: 'white_traditional_kitchen_3'
                    },
               ],
               [Room.LIVING_ROOM]: [],
               [Room.OFFICE]: [],
            }
        }
    }

    static getImagesIn(colors: Color[], style: Style, rooms: Room[]): ImageResource[] {
        let result: ImageResource[] = [];
    
        for (const color of colors) {
            const styleData = ImagesService.images[color][style];
            if (styleData) {
                for (const room of rooms) {
                    const roomImages = styleData[room];
                    if (roomImages) {
                        result = result.concat(roomImages);
                    }
                }
            }
        }
        
        return result;
    }
}