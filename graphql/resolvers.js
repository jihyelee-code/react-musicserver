import {getAll, getAlbum, getArtist} from './db';
const resolvers = {
    Query:{
        search:(_,{request})=>getAll(request)
        // search_Album:(_,{request}) =>getAlbum(request)
    }
}
export default resolvers;