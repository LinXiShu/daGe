/*
Navicat MySQL Data Transfer

Source Server         : linxishu
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1708

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:46:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) NOT NULL COMMENT '商品名字',
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgs` varchar(255) NOT NULL DEFAULT 'img/null.jpg',
  `category` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` double(255,0) DEFAULT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('11', 'Reebok', '499.00', '100', '这鞋子挺好的。', 'img/asd/0017.jpg', '白鞋', '白色', '40', '2018-02-08 19:51:17');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) NOT NULL COMMENT '商品名字',
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgs` varchar(255) NOT NULL DEFAULT 'img/null.jpg',
  `category` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` double(255,0) DEFAULT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '匡威', '888.00', '100', '翻版匡威，贼便宜', 'img/asd/0001.jpg', '男鞋', '黑', '41', '2018-02-08 20:09:06');
INSERT INTO `goods` VALUES ('2', '三叶草阿迪', '999.00', '100', '三杠白饭鱼', 'img/asd/0002.jpg', '男鞋', '白', '41', '2018-02-08 20:09:12');
INSERT INTO `goods` VALUES ('3', '锐步', '1000.00', '100', '高贵低俗跑步鞋', 'img/asd/0003.jpg', '男鞋', '灰', '42', '2018-02-08 20:09:17');
INSERT INTO `goods` VALUES ('4', '高跟鞋', '100.00', '100', '黑皮，酷', 'img/asd/0004.jpg', '女鞋', '酷黑', '38', '2018-02-08 20:09:21');
INSERT INTO `goods` VALUES ('5', '皮鞋', '599.00', '100', '牛皮，紧脚', 'img/asd/0005.jpg', '男鞋', '泛黄', '42', '2018-02-08 19:50:53');
INSERT INTO `goods` VALUES ('6', '增高鞋', '1000.00', '100', '无敌内增高，汗马宝靴', 'img/asd/0006.jpg', '男鞋', '白', '42', '2018-02-08 19:50:57');
INSERT INTO `goods` VALUES ('7', '白饭鱼', '99.00', '100', '真丶白饭鱼', 'img/asd/0007.jpg', '女鞋', '白', '40', '2018-02-08 19:51:02');
INSERT INTO `goods` VALUES ('8', '拖鞋', '100.00', '100', '很丑的鞋子', 'img/asd/0008.jpg', '女鞋', '灰色', '40', '2018-02-08 19:51:05');
INSERT INTO `goods` VALUES ('9', '高仿安踏', '299.00', '100', '挺好看的啦，真的挺好看啊。', 'img/asd/0009.jpg', '男鞋', '白色', '40', '2018-02-08 19:51:10');
INSERT INTO `goods` VALUES ('10', '小皮鞋', '399.00', '100', '挺好看的啦，真的挺好看啊。', 'img/asd/0010.jpg', '白鞋', '白色', '40', '2018-02-08 19:51:14');
INSERT INTO `goods` VALUES ('11', 'Reebok', '499.00', '100', '这鞋子挺好的。', 'img/asd/0017.jpg', '白鞋', '白色', '40', '2018-02-08 19:51:17');

-- ----------------------------
-- Table structure for user3
-- ----------------------------
DROP TABLE IF EXISTS `user3`;
CREATE TABLE `user3` (
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user3
-- ----------------------------
INSERT INTO `user3` VALUES ('123123qweq', '106bc714c038b1dd6954dba7049b59e4');
INSERT INTO `user3` VALUES ('1qw1', '11');
INSERT INTO `user3` VALUES ('d3d3', 'bcbe3365e6ac95ea2c0343a2395834dd');
INSERT INTO `user3` VALUES ('123asd', '4297f44b13955235245b2497399d7a93');
INSERT INTO `user3` VALUES ('213213', '8ad3fac6c6b3528499d347d924443abb');
INSERT INTO `user3` VALUES ('123123', '7c4f14442c68e6bee026293d9b2f3d22');
INSERT INTO `user3` VALUES ('lin', '8ad3fac6c6b3528499d347d924443abb');
INSERT INTO `user3` VALUES ('21e1e3e', '4297f44b13955235245b2497399d7a93');
INSERT INTO `user3` VALUES ('poqpo', '8f9cf3f5789e16124f38936954a98668');
INSERT INTO `user3` VALUES ('pqpqp21', '76d80224611fc919a5d54f0ff9fba446');
INSERT INTO `user3` VALUES ('pqpqpq', 'abceedf5017915685f379075f00a5ccd');
INSERT INTO `user3` VALUES ('user', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user3` VALUES ('zhaojianfeng', '3946792686bdbe6a1089ea50c8e35ee1');
INSERT INTO `user3` VALUES ('23121', '860b432652504fa60f8da945398e20de');
INSERT INTO `user3` VALUES ('231211', '860b432652504fa60f8da945398e20de');
INSERT INTO `user3` VALUES ('qweqwe4', 'd6a2e3c51e2434ed72ca2e8ecfe9a34c');
INSERT INTO `user3` VALUES ('123ook31', 'd6a2e3c51e2434ed72ca2e8ecfe9a34c');
SET FOREIGN_KEY_CHECKS=1;
