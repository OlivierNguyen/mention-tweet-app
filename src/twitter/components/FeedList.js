// @flow
import React, { Component } from 'react';
import FeedItem from './FeedItem';

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
        const S = {
            container: {
                width: 450,
                height: 550,
                overflowY: 'scroll',
                backgroundColor: '#fff',
                borderRadius: 5,
                boxShadow:
                    'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px',
            },
        };

        return (
            <div style={S.container}>
                {this.props.data.map(tweetInfo => (
                    <FeedItem
                        key={tweetInfo.id} data={tweetInfo}
                    />
                ))}
            </div>
        );
    }
}
