import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../../../config/theme/theme';
import Title from '../../components/Title';
import MenuItem from '../../components/MenuItem';
import { ThemeContext } from '../../context/ThemeContext';
import CustomView from '../ui/CustomView';

// HomeScreen Component
export const HomeScreen = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <CustomView>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text='Opciones de menú' safe />

          {/* Primer Bloque */}
          {AnimationItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === AnimationItems.length - 1} // Corregido a AnimationItems
            />
          ))}

          {/* Segundo Bloque */}
          <View style={{ marginTop: 30 }}></View>
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1} // Corregido a uiMenuItems
            />
          ))}

          {/* Tercer Bloque */}
          <View style={{ marginTop: 30 }}></View>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1} // Ya está correcto
            />
          ))}

        </ScrollView>
      </View>
    </CustomView>
  );
};

// Grupos de ítems del menú

// Grupo 1: AnimationItems
export const AnimationItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

// Grupo 2: UI MenuItems
export const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

// Grupo 3: Otras opciones de menú
export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
