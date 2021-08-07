/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text, Image, Modal} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import {Fonts, Images, Colors} from '../../Themes';
import Scale, {ScaleHeight} from '../../Transforms/Scale';

class PostItem extends PureComponent {
  state = {
    modalVisible: false,
  };

  visibleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  getDate = date => {
    return moment().calendar(null, {
      sameDay: '[Today at ]DD:MM',
      nextDay: '[Tomorrow at ]DD:MM',
      nextWeek: 'dddd',
      lastDay: '[Yesterday at ]DD:MM',
      lastWeek: '[Last] dddd',
      sameElse: 'DD MM YYYY',
    });
  };

  button = (title = '', icon = '', active = false, onPress = () => {}) => {
    const textStyle = active
      ? Fonts.style.regularRegularBlue
      : Fonts.style.regularRegularGrey;
    return (
      <TouchableOpacity style={styles.contentButton}>
        <Image source={icon} style={styles.icon} />
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  renderAction = (title = '', textAction = '', action = () => {}) => {
    return (
      <View style={styles.containerAction}>
        <View style={{flex: 0.5}}>
          <Text style={Fonts.style.titleBoldBlack}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.btnAction} onPress={this.visibleModal}>
          <Text style={Fonts.style.titleBoldGreen}>{textAction}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderModalActions = () => {
    return (
      <Modal transparent={true} visible={this.state.modalVisible}>
        <View style={styles.containerModal}>
          <TouchableOpacity style={{flex: 0.7}} onPress={this.visibleModal} />
          <View style={styles.contentModal}>
            <View style={styles.contentHeaderActions}>
              <Text style={Fonts.style.titleBoldBlack}>Post Filer</Text>
            </View>
            {this.renderAction('See your post on', 'All Post')}
            {this.renderAction('Privacy', 'Everyone')}
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    try {
      console.log('PostItem ', this.props);
      const {post} = this.props;
      return (
        <TouchableOpacity style={styles.container}>
          <View style={styles.contentHeader}>
            <Image source={{uri: post.profile}} style={styles.imageProfile} />
            <View style={{flex: 1}}>
              <Text style={Fonts.style.titleBoldBlack}>{post.name}</Text>
              <Text style={Fonts.style.normalRegularGrey}>
                {this.getDate(post.created_at)}
              </Text>
            </View>
            <TouchableOpacity onPress={this.visibleModal}>
              <Image source={Images.iconMenuBurger} style={styles.iconMenu} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentImage}>
            <Image style={styles.imagePost} source={{uri: post.image}} />
          </View>
          <Text style={Fonts.style.regularRegularGrey}>{post.content}</Text>
          <View style={[styles.contentRowCenter, {marginVertical: 10}]}>
            <View style={[styles.contentRowCenter, {flex: 1}]}>
              <Image source={Images.iconEmoticon} style={styles.iconEmot} />
              <Text style={Fonts.style.smallRegularGrey}>
                Andre and 40 others
              </Text>
            </View>
            <Text
              style={[Fonts.style.smallRegularGrey, {marginHorizontal: 10}]}>
              {post.comment.total} comment
            </Text>
            <Text style={Fonts.style.smallRegularGrey}>
              {post.share.total} shares
            </Text>
          </View>
          <View style={styles.containerButton}>
            {this.button(
              'Like',
              post.is_like ? Images.iconLikeActive : Images.iconLike,
              post.is_like,
            )}
            {this.button('Comment', Images.iconComment)}
            {this.button('Share', Images.iconShare)}
          </View>
          {this.renderModalActions()}
        </TouchableOpacity>
      );
    } catch (err) {
      console.log('ERROR PostItem', err.message);
      return null;
    }
  }
}

PostItem.defaultProps = {
  post: null,
};

PostItem.propTypes = {
  post: PropTypes.objectOf(PropTypes.any),
};

export default PostItem;

const SIZE_IMAGE_PROFILE = Scale(50);
const SIZE_IMAGE_POST = ScaleHeight(300);
const SIZE_ICON_MENU = Scale(24);
const SIZE_ICON = Scale(20);
const SIZE_ICON_EMOT = Scale(19);

const styles = {
  container: {
    margin: 12,
    marginBottom: 0,
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
  },
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contentHeaderActions: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImage: {
    paddingVertical: 10,
  },
  contentRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 2,
    borderTopColor: Colors.border,
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(4, 4, 15, 0.5)',
    justifyContent: 'flex-end',
  },
  contentModal: {
    flex: 0.3,
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    width: SIZE_IMAGE_PROFILE,
    height: SIZE_IMAGE_PROFILE,
    borderRadius: SIZE_IMAGE_PROFILE / 2,
    marginRight: 10,
  },
  imagePost: {
    height: SIZE_IMAGE_POST,
    width: null,
    borderRadius: 10,
    backgroundColor: Colors.backgroundGrey,
  },
  iconMenu: {
    width: SIZE_ICON_MENU,
    height: SIZE_ICON_MENU,
    // marginRight: 5,
  },
  icon: {
    width: SIZE_ICON,
    height: SIZE_ICON,
    marginRight: 5,
  },
  iconEmot: {
    flex: 1,
    height: SIZE_ICON_EMOT,
    width: null,
    marginRight: 5,
    resizeMode: 'contain',
  },
  btnAction: {
    flex: 0.5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.green,
  },
};
