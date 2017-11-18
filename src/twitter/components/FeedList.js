// @flow
import React, { Component } from 'react';
import FeedItem from './FeedItem';
import Radium from 'radium';

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

type State = {
    idFeedItemToOpen: number | null,
};

class FeedList extends Component<Props, State> {
    toggleAnimation: Function;

    constructor(props: Object) {
        super(props);
        this.state = {
            idFeedItemToOpen: null,
        };
        this.toggleAnimation = this.toggleAnimation.bind(this);
    }

    toggleAnimation(id: number) {
        const shouldClose = this.state.idFeedItemToOpen === id;
        this.setState({ idFeedItemToOpen: shouldClose ? null : id });
    }

    render() {
        const S = {
            container: {
                width: 450,
                backgroundColor: '#fff',
                borderRadius: 5,
                marginBottom: 40,
                boxShadow:
                    'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px',
                '@media (max-width: 500px)': {
                    width: 250,
                    marginBottom: 50,
                },
            },
        };

        return (
            <div style={S.container}>
                {this.props.data.map(tweetInfo => (
                    <FeedItem
                        onClick={this.toggleAnimation}
                        open={this.state.idFeedItemToOpen === tweetInfo.id}
                        key={tweetInfo.id}
                        data={tweetInfo}
                    />
                ))}
            </div>
        );
    }
}

export default Radium(FeedList);
