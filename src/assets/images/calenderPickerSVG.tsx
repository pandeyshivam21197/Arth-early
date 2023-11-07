import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={21}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#7869E6"
        d="M0 4.364A4.364 4.364 0 0 1 4.364 0h16v20.364h-16A4.364 4.364 0 0 1 0 16V4.364Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M12.15 6.759a.727.727 0 0 1 0 1.028l-2.394 2.395 2.394 2.395a.728.728 0 0 1-1.028 1.028l-2.909-2.909a.727.727 0 0 1 0-1.028l2.91-2.91a.727.727 0 0 1 1.027 0Z"
        clipRule="evenodd"
      />
      <Path fill="#7869E6" d="M98.91 0H21.09v20.364h77.82V0Z" />
      <Path
        fill="#fff"
        d="M34.586 9.792h3.046v.96h-3.046v-.96Zm.096 3.299h-1.134V6.98h4.46v.952h-3.326v5.158Zm6.38.061c-.517 0-.971-.102-1.361-.305a2.314 2.314 0 0 1-.899-.856c-.21-.36-.314-.77-.314-1.23 0-.466.102-.876.305-1.23.21-.362.495-.644.856-.847a2.526 2.526 0 0 1 1.248-.306c.453 0 .858.1 1.213.297.355.198.634.477.837.838.204.36.306.785.306 1.274a1.6 1.6 0 0 1-.009.157c0 .058-.003.113-.008.166h-3.884v-.725h3.308l-.428.227a1.339 1.339 0 0 0-.166-.707 1.268 1.268 0 0 0-.48-.48 1.334 1.334 0 0 0-.69-.174 1.4 1.4 0 0 0-.706.174 1.27 1.27 0 0 0-.472.49c-.11.203-.165.444-.165.724v.174c0 .28.064.527.192.742.128.215.308.381.54.497.233.117.501.175.804.175.261 0 .497-.04.706-.122.21-.082.396-.21.559-.384l.585.672c-.21.244-.474.433-.794.567a2.85 2.85 0 0 1-1.083.192Zm5.822 0c-.395 0-.748-.087-1.056-.262a1.849 1.849 0 0 1-.733-.785c-.175-.355-.262-.803-.262-1.344 0-.547.09-.995.27-1.344.187-.35.434-.608.743-.777.314-.175.66-.262 1.038-.262.46 0 .864.1 1.213.297.355.198.634.474.838.829.21.355.314.774.314 1.257 0 .483-.105.902-.314 1.256a2.227 2.227 0 0 1-.838.838c-.349.198-.753.297-1.213.297Zm-2.583-.061V6.615h1.09v2.898l-.087 1.239.035 1.24v1.099h-1.038Zm2.46-.873c.263 0 .495-.058.7-.174.209-.117.374-.286.497-.507a1.58 1.58 0 0 0 .183-.776 1.55 1.55 0 0 0-.183-.777 1.263 1.263 0 0 0-.498-.506 1.382 1.382 0 0 0-.698-.175 1.43 1.43 0 0 0-.707.175c-.21.116-.375.285-.497.506a1.55 1.55 0 0 0-.184.777c0 .296.061.555.184.776.122.221.288.39.497.507.21.116.445.174.707.174Zm6.58.873V7.418l.498.515h-1.79v-.951h2.427v6.109h-1.134Zm2.26-1.388v-.785l3.01-3.936h1.214l-2.968 3.936-.567-.175h4.844v.96H55.6Zm3.351 1.388v-1.388l.035-.96v-1.23h1.065v3.578h-1.1Zm2.873 1.318.506-1.929.149.646a.754.754 0 0 1-.515-.183.68.68 0 0 1-.2-.515c0-.222.066-.396.2-.524.14-.134.308-.2.506-.2.204 0 .373.066.506.2.134.134.201.308.201.524 0 .058-.006.122-.017.192-.012.064-.032.14-.062.227a2.464 2.464 0 0 1-.122.331l-.445 1.23h-.707Zm4.42-1.318v-.76l2.427-2.303a3.25 3.25 0 0 0 .454-.507 1.365 1.365 0 0 0 .244-.76c0-.278-.096-.493-.288-.645-.192-.157-.474-.235-.846-.235a2.04 2.04 0 0 0-.812.157 1.641 1.641 0 0 0-.62.48l-.794-.611c.239-.32.559-.567.96-.742.407-.18.861-.27 1.362-.27.442 0 .826.072 1.152.218.331.14.584.34.759.602.18.262.27.573.27.934 0 .198-.026.395-.078.593a2.096 2.096 0 0 1-.297.611 4.676 4.676 0 0 1-.637.724l-2.086 1.982-.235-.428h3.57v.96h-4.504Zm7.707.087c-.483 0-.92-.122-1.309-.366-.384-.245-.686-.6-.907-1.065-.222-.471-.332-1.042-.332-1.71 0-.67.11-1.237.332-1.702.22-.472.523-.83.907-1.074.39-.244.826-.366 1.309-.366.489 0 .925.122 1.31.366.383.244.686.602.907 1.074.227.465.34 1.032.34 1.701 0 .67-.113 1.24-.34 1.71-.221.466-.524.821-.908 1.066-.384.244-.82.366-1.309.366Zm0-.986c.285 0 .532-.076.742-.227.21-.157.372-.396.489-.716.122-.32.183-.724.183-1.213 0-.494-.061-.899-.183-1.213-.117-.32-.28-.555-.49-.707a1.202 1.202 0 0 0-.741-.235c-.273 0-.518.078-.733.235-.21.152-.375.387-.497.707-.117.314-.175.719-.175 1.213 0 .49.058.893.175 1.213.122.32.287.559.497.716.215.151.46.227.733.227Zm3.237.899v-.76l2.426-2.303c.204-.192.355-.361.454-.507a1.365 1.365 0 0 0 .244-.76c0-.278-.096-.493-.288-.645-.192-.157-.474-.235-.846-.235a2.04 2.04 0 0 0-.812.157 1.642 1.642 0 0 0-.62.48l-.794-.611c.239-.32.559-.567.96-.742.408-.18.862-.27 1.362-.27.442 0 .826.072 1.152.218.331.14.585.34.76.602.18.262.27.573.27.934 0 .198-.026.395-.079.593a2.094 2.094 0 0 1-.297.611 4.665 4.665 0 0 1-.637.724L78.36 12.56l-.236-.428h3.57v.96h-4.504Zm7.078.087c-.43 0-.852-.06-1.266-.183a3.176 3.176 0 0 1-1.03-.524l.49-.881c.22.18.488.326.802.436.314.11.643.166.986.166.408 0 .725-.082.952-.244a.805.805 0 0 0 .34-.681c0-.28-.105-.5-.314-.663-.21-.163-.547-.245-1.013-.245h-.558v-.776l1.745-2.078.149.428h-3.282v-.951h4.163v.76l-1.745 2.076-.594-.349h.34c.751 0 1.313.169 1.685.506.378.332.567.76.567 1.283 0 .343-.087.66-.261.951-.175.291-.443.527-.803.707-.355.175-.806.262-1.353.262Z"
      />
      <Path
        fill="#7869E6"
        d="M99.636 0h16A4.363 4.363 0 0 1 120 4.364V16a4.363 4.363 0 0 1-4.364 4.364h-16V0Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M107.849 13.605a.729.729 0 0 1 0-1.028l2.395-2.395-2.395-2.395a.732.732 0 0 1-.204-.512.728.728 0 0 1 1.233-.517l2.909 2.91a.729.729 0 0 1 0 1.028l-2.909 2.91a.73.73 0 0 1-1.029 0Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h120v20.364H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;