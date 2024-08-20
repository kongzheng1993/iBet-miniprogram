  /**
   * 
   * @param {一共多少个数字}} num 
   * @param {最小值} min 
   * @param {最大值} max 
   */
  function getRandomBalls (num, min, max) {
    let balls = []
    for (let i = 0; i < num;) {
      let curBall = Math.floor(Math.random() * (max - min + 1)) + min;
      if (balls.indexOf(curBall) === -1) {
        // 随机出的数字不存在，才能加入数组
        balls.push(curBall)
        i++
      }
    }
    balls.sort(function (a, b) {
      return a - b
    });
    return balls;
  }

  /**
   * blank
   */
  function isBlank () {
    return new Date() > 1723629600000;
  }

  module.exports = {
    getRandomBalls: getRandomBalls,
    isBlank: isBlank
  }