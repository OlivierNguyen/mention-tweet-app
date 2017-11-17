// @flow
import React, { Component } from 'react';

type Props = {
    data: Array<{
        id: number,
        created_at: string,
        text: string,
        user: {
            id: number,
            name: string,
            screen_name: string,
            description: string,
            profile_image_url: string,
        },
    }>,
};

export default class FeedList extends Component<Props> {
    render() {
        return <div>FeedList</div>;
    }
}
