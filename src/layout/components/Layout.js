// @flow
import React, { Component } from 'react';
import Radium from 'radium';
import TweenMax from 'gsap';
import FeedList from '../../twitter/components/FeedList';
import Footer from './Footer';
import Loader from './Loader';
import { formatMentionsData } from '../../utils/utils';
import { MentionCaller } from '../../utils/dataController';
import { SETTINGS } from '../../settings';

/**
 * Fetch data from Mention API
 * @returns Promise
 */
const fetchDataPromise = () => {
    return MentionCaller.callPromise(
        'GET',
        `/api/accounts/${SETTINGS.MENTION_ACCOUNT_ID}/alerts/${SETTINGS.MENTION_ALERT_ID}/mentions`,
        {}
    );
};

type Props = {};

type State = {
    data: Array<?Object>,
    isLoading: boolean,
};

class Layout extends Component<Props, State> {
    feedListContainer: ?HTMLDivElement;

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        // Init opacity of the feedlist to 0 for animation
        TweenMax.set(this.feedListContainer, { opacity: 0 });

        fetchDataPromise().then(res => {
            this.setState(
                {
                    data: formatMentionsData(res.data.mentions),
                    isLoading: false,
                },
                () =>
                    setTimeout(
                        () =>
                            TweenMax.to(this.feedListContainer, 1, {
                                opacity: 1,
                            }),
                        500
                    )
            );
        });
    }

    render() {
        const S = {
            container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            logo: {
                width: 300,
                padding: 20,
                position: 'fixed',
                top: 0,
                left: 0,
                '@media (max-width: 500px)': {
                    width: 100,
                    padding: 5,
                },
            },
            containerFeed: {
                marginTop: 40,
                zIndex: 10,
                borderRadius: 5,
            },
            containerFooter: {
                position: 'fixed',
                bottom: 0,
                right: 0,
                paddingRight: 20,
                paddingBottom: 10,
            },
            loader: {
                position: 'fixed',
                left: '50%',
                top: '50%',
            },
        };
        return (
            <div style={S.container}>
                <img
                    style={S.logo}
                    src="/images/blue-bg-logo-txt.jpg"
                    alt="Mention"
                />
                <div style={S.containerFeed}>
                    <div style={S.loader}>
                        <Loader
                            show={this.state.isLoading}
                            text={'Data is loading...'}
                        />
                    </div>
                    <div ref={ref => (this.feedListContainer = ref)}>
                        <FeedList data={this.state.data} />
                    </div>
                </div>
                <div style={S.containerFooter}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Radium(Layout);
