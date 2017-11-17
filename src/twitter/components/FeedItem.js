// @flow
import React, { Component } from 'react';

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
            container: {},
            leftContainer: {},
            profile: {},
            rightContainer: {},
            screenName: {},
            name: {},
            text: {},
            date: {},
        };

        return (
            <div style={S.container}>
                <div style={S.date}>{created_at}</div>
                <div style={S.leftContainer}>
                    <img
                        style={S.profile}
                        src={user.profile_image_url}
                        alt="profil"
                    />
                </div>
                <div style={S.rightContainer}>
                    <div style={S.screenName}>{user.screen_name}</div>
                    <div style={S.name}>{user.name}</div>
                    <div style={S.text}>{text}</div>
                </div>
            </div>
        );
    }
}
