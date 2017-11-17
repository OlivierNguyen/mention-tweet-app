import { map, pick } from 'ramda';

/**
 * Extract only some keys of the tweet object
 * Input = {
 *   created_at: 'Fri Nov 17 17:54:48 +0000 2017',
 *   id: 931581399676567552,
 *   ...
 * }
 *
 * Output = {
 *      id:931584639709384700,
 *      created_at: "Fri Nov 17 18:07:40 +0000 2017",
 *      text: "Learn Swift 4 &amp; iOS 11 the Fun Way - Swift Playgrounds App\n☞ https://t.co/an10v8X6LI\n#react #reactjs #node #nodejs… https://t.co/Lzl8PxKTnT",
 *      user: {
 *          id: 856731149611053000,
 *          name: "React & Nodejs",
 *          screen_name: "React_Nodejs",
 *          description: "#react #redux #reactjs #node #nodejs",
 *          profile_image_url: "http://pbs.twimg.com/profile_images/856732614077456384/zA6ENalK_normal.jpg"
 *          }
 *  }
 */
export const extractTwitterStatuses = data => {
    const statuses = data.statuses;

    return map(status => {
        const minStatusInfo = pick(
            ['id', 'created_at', 'text', 'user'],
            status
        );
        const minUserInfo = pick(
            ['id', 'name', 'screen_name', 'description', 'profile_image_url'],
            status.user
        );

        return {
            ...minStatusInfo,
            user: minUserInfo,
        };
    })(statuses);
};
