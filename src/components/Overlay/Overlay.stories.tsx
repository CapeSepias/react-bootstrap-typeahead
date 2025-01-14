/* eslint-disable sort-keys,import/no-extraneous-dependencies */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Overlay, { OverlayProps } from './Overlay';
import Menu from '../Menu';
import { BaseMenuItem } from '../MenuItem';

export default {
  title: 'Components/Overlay',
  component: Overlay,
} as Meta;

const Template: Story<OverlayProps> = (args) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={setReferenceElement}
        style={{ border: '1px solid red', padding: '4px' }}>
        Reference element
      </div>
      <Overlay {...args} referenceElement={referenceElement}>
        {(menuProps) => (
          <Menu {...menuProps} id="overlay-story">
            <BaseMenuItem role="option">This is the menu</BaseMenuItem>
          </Menu>
        )}
      </Overlay>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isMenuShown: true,
  positionFixed: true,
};
