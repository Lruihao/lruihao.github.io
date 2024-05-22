/**
 * 源码来自互联网，作者不详
 * @modified by Lruihao 2024-05-21 移除依赖 jQuery
 * @description 一个鱼游动的动画效果
 */
const RENDERER = {
  POINT_INTERVAL: 5,
  FISH_COUNT: 3,
  MAX_INTERVAL_COUNT: 50,
  INIT_HEIGHT_RATE: 0.5,
  THRESHOLD: 50,

  init: function () {
    this.setParameters();
    this.setStyle();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  },
  setParameters: function () {
    this.window = window;
    this.container = document.createElement("div");
    this.container.id = "flyfish";
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.points = [];
    this.fishes = [];
    this.watchIds = [];
    document.querySelector('.footer').appendChild(this.container);
  },
  setStyle: function () {
    const style = document.createElement("style");
    style.innerHTML = `
    .footer {
      position: relative;
    }
    #flyfish {
      position: absolute;
      width: 100%;
      height: 230px;
      overflow: hidden;
      left: 0;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }`;
    document.querySelector("head").appendChild(style);
  },
  createSurfacePoints: function () {
    const count = Math.round(this.width / this.POINT_INTERVAL);
    this.pointInterval = this.width / (count - 1);
    this.points.push(new SURFACE_POINT(this, 0));

    for (let i = 1; i < count; i++) {
      const point = new SURFACE_POINT(this, i * this.pointInterval),
        previous = this.points[i - 1];

      point.setPreviousPoint(previous);
      previous.setNextPoint(point);
      this.points.push(point);
    }
  },
  reconstructMethods: function () {
    this.watchWindowSize = this.watchWindowSize.bind(this);
    this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    this.startEpicenter = this.startEpicenter.bind(this);
    this.moveEpicenter = this.moveEpicenter.bind(this);
    this.render = this.render.bind(this);
  },
  setup: function () {
    this.points.length = 0;
    this.fishes.length = 0;
    this.watchIds.length = 0;
    this.intervalCount = this.MAX_INTERVAL_COUNT;
    
    this.containerWidth = this.container.offsetWidth;
    this.containerHeight = this.container.offsetHeight;
    this.width = this.containerWidth;
    this.height = this.containerHeight;
    this.fishCount =
      (((this.FISH_COUNT * this.width) / 500) * this.height) / 500;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.reverse = false;

    this.container.appendChild(this.canvas);
    this.fishes.push(new FISH(this));
    this.createSurfacePoints();
  },
  watchWindowSize: function () {
    this.clearTimer();
    this.tmpWidth = this.window.innerWidth;
    this.tmpHeight = this.window.innerHeight;
    this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
  },
  clearTimer: function () {
    while (this.watchIds.length > 0) {
      clearTimeout(this.watchIds.pop());
    }
  },
  jdugeToStopResize: function () {
    const width = this.window.innerWidth,
      height = this.window.innerHeight,
      stopped = width == this.tmpWidth && height == this.tmpHeight;

    this.tmpWidth = width;
    this.tmpHeight = height;

    if (stopped) {
      this.setup();
    }
  },
  bindEvent: function () {
    const self = this;
    this.window.addEventListener("resize", function() {
      self.watchWindowSize();
    });
    this.container.addEventListener("mouseenter", function(event) {
      self.startEpicenter(event);
    });
    this.container.addEventListener("mousemove", function(event) {
      self.moveEpicenter(event);
    });
  },
  getAxis: function (event) {
    const offset = this.container.getBoundingClientRect();

    return {
      x: event.clientX - offset.left + this.window.scrollX,
      y: event.clientY - offset.top + this.window.scrollY,
    };
  },
  startEpicenter: function (event) {
    this.axis = this.getAxis(event);
  },
  moveEpicenter: function (event) {
    const axis = this.getAxis(event);

    if (!this.axis) {
      this.axis = axis;
    }
    this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
    this.axis = axis;
  },
  generateEpicenter: function (x, y, velocity) {
    if (
      y < this.height / 2 - this.THRESHOLD ||
      y > this.height / 2 + this.THRESHOLD
    ) {
      return;
    }
    const index = Math.round(x / this.pointInterval);

    if (index < 0 || index >= this.points.length) {
      return;
    }
    this.points[index].interfere(y, velocity);
  },
  controlStatus: function () {
    for (let i = 0, count = this.points.length; i < count; i++) {
      this.points[i].updateSelf();
    }
    for (let i = 0, count = this.points.length; i < count; i++) {
      this.points[i].updateNeighbors();
    }
    if (this.fishes.length < this.fishCount) {
      if (--this.intervalCount == 0) {
        this.intervalCount = this.MAX_INTERVAL_COUNT;
        this.fishes.push(new FISH(this));
      }
    }
  },
  render: function () {
    const self = this;
    function renderFrame() {
      self.controlStatus();
      self.context.clearRect(0, 0, self.width, self.height);
      // 这里利用 FixIt 主题的 isDark 属性来判断是否是暗色主题
      if (fixit.isDark) {
        self.context.fillStyle = "rgb(255 255 255 / 10%)";
      } else {
        self.context.fillStyle = "#e6e5f8";
      }

      for (let i = 0, count = self.fishes.length; i < count; i++) {
        self.fishes[i].render(self.context);
      }
      self.context.save();
      self.context.globalCompositeOperation = "xor";
      self.context.beginPath();
      self.context.moveTo(0, self.reverse ? 0 : self.height);

      for (let i = 0, count = self.points.length; i < count; i++) {
        self.points[i].render(self.context);
      }
      self.context.lineTo(self.width, self.reverse ? 0 : self.height);
      self.context.closePath();
      self.context.fill();
      self.context.restore();

      requestAnimationFrame(renderFrame);
    }
    renderFrame();
  },
};

// SURFACE_POINT class
function SURFACE_POINT(renderer, x) {
  this.renderer = renderer;
  this.x = x;
  this.init();
}
SURFACE_POINT.prototype = {
  SPRING_CONSTANT: 0.03,
  SPRING_FRICTION: 0.9,
  WAVE_SPREAD: 0.3,
  ACCELARATION_RATE: 0.01,

  init: function () {
    this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
    this.height = this.initHeight;
    this.fy = 0;
    this.force = { previous: 0, next: 0 };
  },
  setPreviousPoint: function (previous) {
    this.previous = previous;
  },
  setNextPoint: function (next) {
    this.next = next;
  },
  interfere: function (y, velocity) {
    this.fy =
      this.renderer.height *
      this.ACCELARATION_RATE *
      (this.renderer.height - this.height - y >= 0 ? -1 : 1) *
      Math.abs(velocity);
  },
  updateSelf: function () {
    this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
    this.fy *= this.SPRING_FRICTION;
    this.height += this.fy;
  },
  updateNeighbors: function () {
    if (this.previous) {
      this.force.previous =
        this.WAVE_SPREAD * (this.height - this.previous.height);
    }
    if (this.next) {
      this.force.next = this.WAVE_SPREAD * (this.height - this.next.height);
    }
  },
  render: function (context) {
    if (this.previous) {
      this.previous.height += this.force.previous;
      this.previous.fy += this.force.previous;
    }
    if (this.next) {
      this.next.height += this.force.next;
      this.next.fy += this.force.next;
    }
    context.lineTo(this.x, this.renderer.height - this.height);
  },
};

// FISH class
function FISH(renderer) {
  this.renderer = renderer;
  this.init();
}
FISH.prototype = {
  GRAVITY: 0.4,

  init: function () {
    this.direction = Math.random() < 0.5;
    this.x = this.direction
      ? this.renderer.width + this.renderer.THRESHOLD
      : -this.renderer.THRESHOLD;
    this.previousY = this.y;
    this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);

    if (this.renderer.reverse) {
      this.y = this.getRandomValue(
        (this.renderer.height * 1) / 10,
        (this.renderer.height * 4) / 10
      );
      this.vy = this.getRandomValue(2, 5);
      this.ay = this.getRandomValue(0.05, 0.2);
    } else {
      this.y = this.getRandomValue(
        (this.renderer.height * 6) / 10,
        (this.renderer.height * 9) / 10
      );
      this.vy = this.getRandomValue(-5, -2);
      this.ay = this.getRandomValue(-0.2, -0.05);
    }
    this.isOut = false;
    this.theta = 0;
    this.phi = 0;
  },
  getRandomValue: function (min, max) {
    return min + (max - min) * Math.random();
  },
  controlStatus: function (context) {
    this.previousY = this.y;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.ay;

    if (this.renderer.reverse) {
      if (this.y > this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
        this.vy -= this.GRAVITY;
        this.isOut = true;
      } else {
        if (this.isOut) {
          this.ay = this.getRandomValue(0.05, 0.2);
        }
        this.isOut = false;
      }
    } else {
      if (this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
        this.vy += this.GRAVITY;
        this.isOut = true;
      } else {
        if (this.isOut) {
          this.ay = this.getRandomValue(-0.2, -0.05);
        }
        this.isOut = false;
      }
    }
    if (!this.isOut) {
      this.theta += Math.PI / 20;
      this.theta %= Math.PI * 2;
      this.phi += Math.PI / 30;
      this.phi %= Math.PI * 2;
    }
    this.renderer.generateEpicenter(
      this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
      this.y,
      this.y - this.previousY
    );

    if (
      (this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD) ||
      (this.vx < 0 && this.x < -this.renderer.THRESHOLD)
    ) {
      this.init();
    }
  },
  render: function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
    context.scale(1, this.direction ? 1 : -1);
    context.beginPath();
    context.moveTo(-30, 0);
    context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
    context.bezierCurveTo(15, -10, -20, -15, -30, 0);
    context.fill();

    context.save();
    context.translate(40, 0);
    context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
    context.beginPath();
    context.moveTo(0, 0);
    context.quadraticCurveTo(5, 10, 20, 8);
    context.quadraticCurveTo(12, 5, 10, 0);
    context.quadraticCurveTo(12, -5, 20, -8);
    context.quadraticCurveTo(5, -10, 0, 0);
    context.fill();
    context.restore();

    context.save();
    context.translate(-3, 0);
    context.rotate(
      (Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi)) *
        (this.renderer.reverse ? -1 : 1)
    );

    context.beginPath();

    if (this.renderer.reverse) {
      context.moveTo(5, 0);
      context.bezierCurveTo(10, 10, 10, 30, 0, 40);
      context.bezierCurveTo(-12, 25, -8, 10, 0, 0);
    } else {
      context.moveTo(-5, 0);
      context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
      context.bezierCurveTo(12, -25, 8, -10, 0, 0);
    }
    context.closePath();
    context.fill();
    context.restore();
    context.restore();
    this.controlStatus(context);
  },
};

window.onload = function () {
  RENDERER.init();
};
