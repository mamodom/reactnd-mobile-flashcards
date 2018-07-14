import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export const navigate = (routeName, params) =>
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );

export const back = () => _navigator.dispatch(NavigationActions.back());

export default {
  navigate,
  setTopLevelNavigator,
  back,
};
