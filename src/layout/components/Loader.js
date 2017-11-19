// @flow
import React, { Component } from 'react';
import TweenMax from 'gsap';

type Props = {
    show: boolean,
    text: string,
};

export default class Loader extends Component<Props> {
    loader: ?HTMLDivElement;
    imageLoader: ?HTMLImageElement;
    animationImageEvent: null; // Or can be TweenMax instance
    animateImageLoader: Function;
    showLoader: Function;

    static defaultProps = {
        show: true,
    };

    constructor(props: Object) {
        super(props);
        this.animateImageLoader = this.animateImageLoader.bind(this);
        this.animationImageEvent = null;
        this.showLoader = this.showLoader.bind(this);
    }

    componentDidMount() {
        this.animateImageLoader(true);
    }

    componentWillReceiveProps(nextProps: Object) {
        this.showLoader(nextProps.show);
    }

    showLoader(show: boolean) {
        TweenMax.to(this.loader, 0.5, {
            opacity: show ? 1 : 0,
            onComplete: () => {
                TweenMax.set(this.loader, { display: show ? 'block' : 'none' });
                this.animateImageLoader(false);
            },
        });
    }

    animateImageLoader(animate: boolean) {
        if (animate) {
            this.animationImageEvent = TweenMax.to(this.imageLoader, 0.3, {
                scale: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'Power0.easeNone',
            });
        } else {
            // Kill animation to avoid using ressources
            this.animationImageEvent && this.animationImageEvent.kill();
        }
    }

    render() {
        const S = {
            container: {
                width: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            image: {
                width: 40,
                height: 40,
            },
            text: {
                marginTop: 10,
                color: '#fff',
                fontSize: 13,
            },
        };

        return (
            <div style={S.container} ref={ref => (this.loader = ref)}>
                <img
                    style={S.image}
                    alt="Loader"
                    src="/images/logo-mention-bg-blue.png"
                    ref={ref => (this.imageLoader = ref)}
                />
                <div style={S.text}>{this.props.text}</div>
            </div>
        );
    }
}
