import {supabase} from '../../../lib/supabaseClient.js'
//
// export async function GET() {
//     try {
//         const { data } = await supabase.from('userdb').select();
//         // console.log(data)
//
//         return new Response({
//             status: 200,
//             body: {
//                 user: data ?? [],
//             },
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return {
//             status: 500,
//             body: {
//                 error: 'Internal Server Error',
//             },
//         };
//     }
// }


export const GET = async ({request}) => {
    const { data } = await supabase.from('userdb').select();

    return new Response(JSON.stringify(data), {status: 200})
}