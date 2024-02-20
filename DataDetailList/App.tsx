import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { SortControlledWithPagination as Example } from './Component/DetailList';
import React = require('react');

const App = () => {
    return (
      <FluentProvider theme={webLightTheme}>
        <Example />
      </FluentProvider>
    );
};

export default App;