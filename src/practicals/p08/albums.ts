import axios from 'axios';

export interface FullAlbum {
    userId: number
    id: number
    title: string
    photos?: Photos[]
  }
  

  interface Photos {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    if(!userIds){
        return []
    }

    const responsPhotos[] = await axios.get<Photos[]>(ALBUMS_URL);
    const responsAlbums[] = await axios.get<FullAlbum[]>(PHOTOS_URL);
    const photos = responsPhotos.data;
    const albums = responsAlbums.data;


    albums.map(album => {
        const photoDetails = album.find(album => album.id === purchaseItem.itemId)
        const photoss = photos.map(photo => {
            return {
                ...photo
            }
        })

    })



}
