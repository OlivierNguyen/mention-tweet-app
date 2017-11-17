// @flow
import React, { Component } from 'react';
import moment from 'moment';
import ProfileIcon from './ProfileIcon';

type Props = {
    data: {
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
    },
};

export default class FeedItem extends Component<Props> {

    render() {
        const { created_at, text, user } = this.props.data;

        const S = {
            container: {
                display: 'flex',
                position: 'relative',
                padding: 15,
                border: 'solid 1px #ededed',
            },
            leftContainer: {},
            rightContainer: {
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'column',
            },
            screenName: {
                color: '#bdbdbd',
                fontSize: 13,
            },
            name: {
                marginBottom: 5,
            },
            text: {
                fontSize: 14,
                color: '#6b6b6b',
            },
            date: {
                color: '#588dca',
                position: 'absolute',
                right: 0,
                top: 0,
                fontSize: 12,
                padding: 10,
            },
        };

        const dateTweet = moment
            .duration(moment().diff(moment(created_at)))
            .humanize();

        return (
            <div style={S.container}>
                <div style={S.date}>{dateTweet}</div>
                <div style={S.leftContainer}>
                    <ProfileIcon imageUrl={user.profile_image_url} />
                </div>
                <div style={S.rightContainer}>
                    <div style={S.screenName}>{`@${user.screen_name}`}</div>
                    <div style={S.name}>{user.name}</div>
                    <div style={S.text}>{text}</div>
                </div>
            </div>
        );
    }
}
