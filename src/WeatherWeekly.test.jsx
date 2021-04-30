import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import WeatherWeekly from './WeatherWeekly.jsx';



const mountWithContext = () => {
    return mount(
        <WeatherWeekly/>
    )
};

describe('Weather Displayer', () => {
    it('should render a header', () => {
        const subject = mountWithContext();
        expect(subject.find('h1').text()).to.be.eql('Weather Displayer');
    });

    it('should render a title', () => {
        const subject = mountWithContext();
        expect(subject.find('h2').text()).to.be.eql('Five Day Forecast');
    });
});

describe('search a zip code', () => {
    it('should render a header', () => {
        const subject = mountWithContext();
        expect(subject.find('h1').text()).to.be.eql('Weather Displayer');
        // .toExist();
    });

});