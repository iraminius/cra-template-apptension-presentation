import { Appear, CodePane, Heading, Image, Slide, Text } from 'spectacle';
import React from 'react';

import hook from '../../images/hook.png';
import styled1 from '../../images/styled_1.png';
import styled2 from '../../images/styled_2.png';
import props1 from '../../images/props1.png';
import props2 from '../../images/props2.png';

export const react = [
  (
    <Slide>
      <Heading>Typing React</Heading>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Hooks</Heading>
      <Text>With auto inference</Text>
      <Image src={hook}/>


      <Appear elementNum={0}>
        <Text>With explicit types</Text>
        <CodePane autoFillHeight>{`const data = useMyHook<ReturnedType>();`}</CodePane>
      </Appear>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Redux actions</Heading>

      <CodePane>
        {`export const setLanguage = createAction<string>('SET_LANGUAGE');

dispatch(localesActions.setLanguage(lang));
`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Selectors</Heading>

      <CodePane>
        {`export const selectLocalesLanguage = createSelector<GlobalState, LocalesState, string>(
  selectLocalesDomain,
  locales => locales.language
);`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Reducers</Heading>

      <CodePane autoFillHeight>
        {`export type LocalesState = {
  language: string;
};

export const INITIAL_STATE: LocalesState = {
  language: null,
};

const handleSetLanguage = (state: LocalesState, { payload }: ReduxAction<string>) => {
  state.language = payload;
};

const HANDLERS = {
  [localesActions.setLanguage.toString()]: handleSetLanguage,
};`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Global state type</Heading>

      <Text>(Autogenerated by plop)</Text>
      <CodePane>
        {`export type GlobalState = {
  locales: LocalesState;
  startup: StartupState;
  users: UsersState;
};`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>StyledComponents & Theme</Heading>

      <Text>Enum constants</Text>
      <CodePane autoFillHeight>
        {`export enum Color {
  WHITE,
  BLACK,
  BORDER,
  DISABLED,
  PRIMARY,
  SECONDARY,
  ERROR,
}`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>StyledComponents & Theme</Heading>

      <Text>Typed theme</Text>
      <CodePane autoFillHeight>
        {`export interface DefaultTheme {
    colors?: ThemeMap<Color, string>;
    ...
  }`}
      </CodePane>

      <Text>Accessible in styled components</Text>

      <Image src={styled1}/>

    </Slide>
  ),

  (
    <Slide>
      <Heading>StyledComponents & Theme</Heading>

      <Text>Styled components also support native props types</Text>

      <Image src={styled2}/>

    </Slide>
  ),

  (
    <Slide>
      <Heading>Props</Heading>

      <Text>No propTypes!</Text>
      <Text>Typescript typings instead</Text>
      <Image width={'100%'} src={props1}/>

    </Slide>
  ),

  (
    <Slide>
      <Heading>Props</Heading>
      <Heading fontSize="h2">Using native props</Heading>

      <Image width={'100%'} src={props2}/>
    </Slide>
  ),
];
