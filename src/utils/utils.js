import { map } from 'ramda';

/**
 * Extract only some keys of the mention object
 * Input = [{
 *      id: "124875846568",
 *      alert_id: 1214654,
 *      title: "RT @aravosis: Now that you mention it, ...",
 *      description: "...",
 *      description_medium: "...",
 *      ...
 *      twitter_real_name :"Cynthia Lessick",
 *      unique_id: "twitter:post/925582859989069824",
 *      updated_at: "2017-11-01T04:42:07.0+00:00"
 *      }]
 *
 * Output = [{
 *      id: 124875846568,
 *      created_at: "...",
 *      text: "...",
 *      user: {
 *          id: 856731149611053000,
 *          name: "Cynthia Lessick",
 *          screen_name: "casl45",
 *          description: "...",
 *          profile_image_url: "http://pbs.twimg.com/profile_images/856732614077456384/zA6ENalK_normal.jpg"
 *      }
 *  }]
 */
export const formatMentionsData = mentions => {
    console.log('mentions', mentions);
    return map(status => {
        const author_influence = status.author_influence;
        return {
            id: status.id,
            created_at: status.created_at,
            text: status.description,
            user: {
                id: author_influence.id,
                name: author_influence.realname,
                screen_name: author_influence.name,
                description: author_influence,
                profile_image_url: author_influence.picture,
            },
        };
    })(mentions);
};
