import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import GifItem from '../../components/GifItem';

it('Renderiza correctamente', () => {
  const wrapper = shallow(
    <GifItem></GifItem>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});