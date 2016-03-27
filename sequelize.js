/* 이 코드는 블로그 포스팅에 사용된 예제 코드입니다.
** 포스트 주소: http://hyunseob.github.io/2016/03/27/usage-of-sequelize-js/
*/

'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'practice', // 데이터베이스 이름
  'root', // 유저 명
  'password', // 비밀번호
  {
    'host': 'localhost', // 데이터베이스 호스트
    'dialect': 'mysql' // 사용할 데이터베이스 종류
  }
);

const Memo = sequelize.define('Memo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

const Label = sequelize.define('Label', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

Memo.belongsToMany(Label, { through: 'MemoLabel' });
Label.belongsToMany(Memo, { through: 'MemoLabel' });

let myMemo;
sequelize.sync({ force: true })
.then(() => {
  return Memo.create({
    title: 'Practice of Sequelize.js',
    body: 'Sequelize.js is ORM for Node.js.'
  });
})
.then((memo) => {
  myMemo = memo;
  return Label.create({
    name: 'Sample'
  });
})
.then((label) => {
  myMemo.addLabel(label);
})
.then(() => {
  return Memo.findOne({
    where: { title: 'Practice of Sequelize.js' }
  });
})
.then((memo) => {
  console.log('Memo: ', memo.dataValues);
  memo.getLabels()
  .then((labels) => console.log('Memo\'s Label: ', labels[0].dataValues));
  return Memo.findOne({
    where: { title: 'Practice of Sequelize.js' },
    include: { model: Label }
  });
})
.then((memo) => {
  console.log('Joined Memo: ', memo.dataValues);
  return Memo.findOrCreate({
    where: { title: 'Mongoose.js' },
    defaults: {
      body: 'Mongoose.js is ODM for Node.js.'
    }
  });
})
.spread((memo, created) => {
  if (created) {
    console.log('New Memo: ', memo.dataValues);
  } else {
    console.log('Old Memo: ', memo.dataValues);
  }
  return Memo.update({
    title: 'Updated Memo'
  }, {
    where: { id: 1 }
  });
})
.then(() => {
  return Memo.findOne({
    where: { title: 'Updated Memo' }
  });
})
.then((memo) => {
  console.log('Updated Memo: ', memo.dataValues);
  return memo.update({ id: 'This memo is updated.' });
})
.then((memo) => {
  console.log('Updated Memo2: ', memo.dataValues);
  return Memo.destroy({ where: { title: 'Updated Memo '}});
})
.then(() => {
  return Memo.findOne({ where: { title: 'Updated Memo' }});
})
.then((memo) => {
  console.log('Destroyed Memo? :', memo);
  return Memo.findById(2);
})
.then((memo) => {
  return memo.destroy();
})
.then(() => {
  console.log('Memo is destroyed.');
});
