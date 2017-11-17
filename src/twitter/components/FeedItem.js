// @flow
import React, { Component } from 'react';
import moment from 'moment';
import TweenMax from 'gsap';
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
    onClick?: Function,
};

export default class FeedItem extends Component<Props> {
    refFeedItem: ?HTMLDivElement;

    constructor(props: Object) {
        super(props);
    }

    componentWillReceiveProps(nextProps: Object) {
        TweenMax.to(this.refFeedItem, 0.5, {
            scale: nextProps.open ? 1.5 : 1,
            zIndex: nextProps.open ? 200: 100,
        });
    }

    render() {
        const { created_at, text, user, id } = this.props.data;

        const S = {
            container: {
                cursor: 'pointer',
                display: 'flex',
                position: 'relative',
                padding: 15,
                border: 'solid 1px #ededed',
                zIndex: 100,
                backgroundColor: '#fff',
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
            <div
                style={S.container}
                onClick={() => this.props.onClick && this.props.onClick(id)}
                ref={ref => (this.refFeedItem = ref)}
            >
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
