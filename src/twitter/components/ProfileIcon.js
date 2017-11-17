// @flow
import React, { Component } from 'react';

type Props = {
    imageUrl: string,
    width?: number,
    height?: number,
};

export default class ProfileIcon extends Component<Props> {
    render() {
        const S = {
            container: {
                position: 'relative',
                width: this.props.width || 48,
                height: this.props.height || 48,
            },
            profile: {
                borderRadius: 50,
                width: '100%',
                height: '100%',
            },
            twitterIcon: {
                position: 'absolute',
                backgroundColor: '#fff',
                borderRadius: 50,
                right: -3,
                bottom: -5,
            },
        };

        return (
            <div style={S.container}>
                <img style={S.profile} src={this.props.imageUrl} alt="profil" />
                <img
                    style={S.twitterIcon}
                    src="/images/twitter-circle.svg"
                    alt="TwitterIcon"
                    height="20"
                />
            </div>
        );
    }
}
