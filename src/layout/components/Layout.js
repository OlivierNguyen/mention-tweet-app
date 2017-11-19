import React, { Component } from 'react';
import Radium from 'radium';
import FeedList from '../../twitter/components/FeedList';
import Footer from './Footer';
import { formatMentionsData } from '../../utils/utils';
import { MentionCaller } from '../../utils/dataController';
import { SETTINGS } from '../../settings';

const fetchDataPromise = () => {
    return MentionCaller.callPromise(
        'GET',
        `/api/accounts/${SETTINGS.MENTION_ACCOUNT_ID}/alerts/${SETTINGS.MENTION_ALERT_ID}/mentions`,
        {}
    );
};

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetchDataPromise().then(res => {
            this.setState({
                data: formatMentionsData(res.data.mentions),
                isLoading: false,
            });
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
        };
        return (
            <div style={S.container}>
                <img
                    style={S.logo}
                    src="/images/blue-bg-logo-txt.jpg"
                    alt="Mention"
                />
                <div style={S.containerFeed}>
                    <FeedList data={this.state.data} />
                </div>
                <div style={S.containerFooter}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Radium(Layout);
