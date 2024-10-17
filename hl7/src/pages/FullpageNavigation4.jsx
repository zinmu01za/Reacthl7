/* eslint-disable react/static-property-placement */
/**
 * @class FullpageNavigation
 */
// eslint-disable-next-line react/react-in-jsx-scope
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FullpageContext } from '@ap.cx/react-fullpage';

// TODO: do navigation
// eslint-disable-next-line react/prefer-stateless-function
class FullpageNavigation extends PureComponent {
    static contextType = FullpageContext;

    static defaultProps = {
        style: {},
        itemStyle: {},
        reverse: false,
    };

    static propTypes = {
        style: PropTypes.objectOf(PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.bool,
        ])),
        itemStyle: PropTypes.objectOf(PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.bool,
        ])),
        reverse: PropTypes.bool,
    };

    render() {
        const { style = false } = this.props;
        const {
            number, slides,
        } = this.context;

        const gotoSlide = (slide) => {
            const { goto } = this.context;
            goto(slide);
        };

        // console.log(number, slides, transitionTiming)
        // if (!number || !slides || !slides.length || transitionTiming) return null;


        return (
            <div style={{
                position: 'fixed',
                height: '100vh',
                zIndex: 100,
                top: 0,
                right: 0,
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                paddingRight: '1em',
                ...style,
            }}
            >
                {
                    slides.map((slide, i) => (
                        <div
                            key={i.toString()}
                        >
                            <div

                                style={{

                                    cursor: "pointer",
                                    height: (number === i) ? 20 : 20,
                                    margin: (number === i) ? 3 : 5,
                                    opacity: (number === i) ? 1 : 0.5,
                                    color: "white",
                                    width: "auto",
                                    display: "flex"
                                }}
                                onClick={() => gotoSlide(slide)}
                                onKeyPress={() => gotoSlide(slide)}>
                                 
                                {i === 0 ? "phone & gmail" : "ส่วนที่ 1" || i === 1 ? "email & social" : "ส่วนที่ 2"}
                            </div>

                            {/* {number === i ? <div>{`ส่วนที่ ${i + 1}`}</div> : <div
                                style={{
                                    borderRadius: '50%',
                                    height: (number === i) ? 14 : 10,
                                    width: (number === i) ? 14 : 10,
                                    margin: (number === i) ? 3 : 5,
                                    backgroundColor: (reverse) ? 'white' : 'black',
                                    opacity: (number === i) ? 1 : 0.5,
                                    transition: `all ${transitionTiming * 0.5}ms ease-in-out`,
                                    ...itemStyle,
                                }}
                                onClick={() => gotoSlide(slide)}
                                onKeyPress={() => gotoSlide(slide)}
                                role="button"
                                tabIndex="-1"
                                aria-label={`Slide ${i}`}
                            >
                                <span style={{
                                    display: 'none',
                                }}
                                >
                                    {`slide number ${i}`}
                                </span>
                            </div>} */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default FullpageNavigation;