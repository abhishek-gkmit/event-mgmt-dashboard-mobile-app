import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  profileScreen: {
    height: '100%',
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    gap: 20,
  },

  profileContainer: {
    gap: 15,
    padding: 10,
    paddingHorizontal: 20,
  },

  profilePictureContainer: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePicture: {
    backgroundColor: colors.fourth,
    borderRadius: 1000,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePictureText: {
    fontSize: 128,
    textAlign: 'center',
    color: colors.black,
  },

  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },

  profileCardTitle: {
    color: colors.fourth,
    fontSize: 18,
    fontWeight: '600',
  },

  profileName: {
    color: colors.black,
    fontSize: 18,
  },

  profileUserName: {
    color: colors.black,
    fontSize: 18,
  },

  profileEmail: {
    color: colors.black,
    fontSize: 18,
  },

  profileGender: {
    color: colors.black,
    fontSize: 18,
  },

  btnContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },

  settingsBtn: {},

  settingsBtnText: {
    fontSize: 18,
  },

  logoutBtn: {
    backgroundColor: colors.red,
  },

  logoutBtnText: {
    fontSize: 18,
  },
});

export default styles;
