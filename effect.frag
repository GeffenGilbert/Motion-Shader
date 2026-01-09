precision mediump float;

uniform sampler2D prev;
uniform sampler2D current;
varying vec2 pos;

// The function where you put most of your code
void main() {
  vec4 prevTex = texture2D(prev, pos);
  vec4 currentTex = texture2D(current, pos);
  
  // 2D gradient
  gl_FragColor = vec4(vec3(currentTex - prevTex), 1.);
}
