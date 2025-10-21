
import React from 'react';
import { Stack } from 'expo-router';
import { Platform } from 'react-native';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { colors } from '@/styles/commonStyles';

const tabs: TabBarItem[] = [
  {
    name: 'home',
    route: '/(tabs)/(home)',
    icon: 'house.fill',
    label: 'Home',
  },
  {
    name: 'profile',
    route: '/(tabs)/profile',
    icon: 'person.fill',
    label: 'About',
  },
];

export default function TabLayout() {
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Screen
          name="(home)"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Icon name="house.fill" color={color} />,
            tabBarLabel: ({ color }) => <Label color={color}>Home</Label>,
          }}
        />
        <NativeTabs.Screen
          name="profile"
          options={{
            title: 'About',
            tabBarIcon: ({ color }) => <Icon name="person.fill" color={color} />,
            tabBarLabel: ({ color }) => <Label color={color}>About</Label>,
          }}
        />
      </NativeTabs>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(home)" />
        <Stack.Screen name="profile" />
      </Stack>
      <FloatingTabBar tabs={tabs} containerWidth={200} />
    </>
  );
}
