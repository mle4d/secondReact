import React from 'react';
import Color from './Color';
import Incremention from './Incremention';

export default function App() {
  return (
    <>
    <Color colors={['#9999ff', '#cc99ff', '#99ccff']} />
    <Incremention />
    </>
  );
}
