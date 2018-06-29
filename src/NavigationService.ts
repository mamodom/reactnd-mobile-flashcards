import {
  NavigationActions,
  NavigationContainerComponent,
} from 'react-navigation';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  _navigator = navigatorRef;
}

export function navigate(routeName: string, params: {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};
