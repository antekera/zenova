import React from 'react';

export function LogoText({ width = 200, height = 58, ...rest }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 241 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        shapeRendering="geometricPrecision"
        d="M78.0876 31.8011L52.7599 34.3325L28.7419 36.765L36.6876 68.3622C36.9611 69.7666 38.0875 70.6888 39.5719 70.6888C40.356 70.6888 41.071 70.393 41.6115 69.9069L80.295 37.2388C81.0062 36.6802 81.463 35.8124 81.463 34.8379C81.463 33.1529 79.7727 31.8011 78.0876 31.8011Z"
        fill="#3EE4FF"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M44.5824 2.64849L52.7599 34.3325L3.6639 39.3049C1.97881 39.3049 0.479004 37.9595 0.479004 36.2744C0.479004 35.3957 0.850436 34.6038 1.44486 34.0471L1.44234 34.0418C18.0948 20.1734 39.9093 1.67957 39.9093 1.67957C39.9093 1.67957 40.9558 0.875031 41.7888 0.875031C43.1583 0.875031 44.2047 1.2943 44.5824 2.64849Z"
        fill="#00FFCE"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M52.7632 34.3349C51.1042 34.497 28.7404 36.7615 28.7404 36.7615L29.3267 39.0904C29.3267 39.0904 52.7632 34.4803 52.7632 34.3349Z"
        fill="#1F7565"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M90.3655 48.7919C90.0319 48.7919 89.7483 48.6919 89.5148 48.4917C89.3147 48.2582 89.2146 47.9746 89.2146 47.641V45.8897C89.2146 45.5895 89.2813 45.3059 89.4148 45.039C89.5815 44.7722 89.7483 44.522 89.9151 44.2885L103.726 26.7249H90.8158C90.4822 26.7249 90.1987 26.6249 89.9652 26.4247C89.765 26.2246 89.6649 25.941 89.6649 25.5741V23.9228C89.6649 23.5892 89.765 23.3223 89.9652 23.1222C90.1987 22.8887 90.4822 22.7719 90.8158 22.7719C97.7725 22.7719 101.673 22.7719 108.63 22.7719C108.963 22.7719 109.23 22.8887 109.43 23.1222C109.664 23.3223 109.78 23.5892 109.78 23.9228C109.78 24.6458 109.78 25.0512 109.78 25.7742C109.78 26.0744 109.697 26.3413 109.53 26.5748C109.397 26.8083 109.247 27.0585 109.08 27.3254L95.4194 44.8389H108.98C109.313 44.8389 109.58 44.939 109.78 45.1391C110.014 45.3393 110.131 45.6228 110.131 45.9898V47.641C110.131 47.9746 110.014 48.2582 109.78 48.4917C109.58 48.6919 109.313 48.7919 108.98 48.7919H90.3655Z"
        fill="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M125.108 49.2923C121.672 49.2923 118.937 48.2415 116.902 46.1399C114.867 44.0049 113.749 41.1027 113.549 37.4332C113.516 36.9995 113.499 36.4491 113.499 35.7819C113.499 35.0814 113.516 34.5143 113.549 34.0806C113.683 31.7121 114.233 29.6439 115.201 27.8758C116.168 26.0744 117.486 24.69 119.154 23.7226C120.855 22.7552 122.84 22.2715 125.108 22.2715C127.644 22.2715 129.762 22.8053 131.463 23.8727C133.198 24.9402 134.515 26.4581 135.416 28.4263C136.317 30.3944 136.767 32.6962 136.767 35.3316V36.1822C136.767 36.5492 136.65 36.8327 136.417 37.0329C136.217 37.233 135.95 37.3331 135.616 37.3331H118.303C118.303 37.3665 118.303 37.4332 118.303 37.5333C118.303 37.6333 118.303 37.7167 118.303 37.7835C118.37 39.1512 118.67 40.4355 119.204 41.6364C119.737 42.804 120.505 43.7547 121.505 44.4886C122.506 45.2225 123.707 45.5895 125.108 45.5895C126.309 45.5895 127.31 45.406 128.111 45.039C128.911 44.6721 129.562 44.2718 130.062 43.8381C130.562 43.3711 130.896 43.0208 131.063 42.7873C131.363 42.3536 131.597 42.1034 131.763 42.0367C131.93 41.9367 132.197 41.8866 132.564 41.8866H134.966C135.299 41.8866 135.566 41.9867 135.766 42.1868C136 42.3536 136.1 42.6038 136.067 42.9374C136.033 43.4378 135.766 44.0549 135.266 44.7888C134.766 45.4894 134.048 46.1899 133.114 46.8905C132.18 47.591 131.046 48.1748 129.712 48.6418C128.377 49.0755 126.843 49.2923 125.108 49.2923ZM118.303 33.8805H132.014V33.7303C132.014 32.2292 131.73 30.8948 131.163 29.7273C130.629 28.5597 129.845 27.6423 128.811 26.9751C127.777 26.2746 126.543 25.9243 125.108 25.9243C123.674 25.9243 122.44 26.2746 121.405 26.9751C120.405 27.6423 119.637 28.5597 119.104 29.7273C118.57 30.8948 118.303 32.2292 118.303 33.7303V33.8805Z"
        fill="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M141.728 48.7919C141.395 48.7919 141.111 48.6919 140.878 48.4917C140.677 48.2582 140.577 47.9746 140.577 47.641V23.9228C140.577 23.5892 140.677 23.3223 140.878 23.1222C141.111 22.8887 141.395 22.7719 141.728 22.7719H144.08C144.414 22.7719 144.68 22.8887 144.881 23.1222C145.114 23.3223 145.231 23.5892 145.231 23.9228V26.1245C146.098 24.9903 147.182 24.0729 148.483 23.3724C149.818 22.6385 151.519 22.2715 153.587 22.2715C155.756 22.2715 157.59 22.7552 159.092 23.7226C160.626 24.6567 161.777 25.9744 162.544 27.6757C163.312 29.3436 163.695 31.2951 163.695 33.5302V47.641C163.695 47.9746 163.595 48.2582 163.395 48.4917C163.195 48.6919 162.928 48.7919 162.594 48.7919H160.092C159.759 48.7919 159.475 48.6919 159.242 48.4917C159.042 48.2582 158.941 47.9746 158.941 47.641V33.7804C158.941 31.4452 158.374 29.6272 157.24 28.3262C156.106 26.9918 154.438 26.3246 152.236 26.3246C150.168 26.3246 148.5 26.9918 147.232 28.3262C145.998 29.6272 145.381 31.4452 145.381 33.7804V47.641C145.381 47.9746 145.264 48.2582 145.031 48.4917C144.831 48.6919 144.564 48.7919 144.23 48.7919H141.728Z"
        fill="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M179.246 49.2923C176.711 49.2923 174.593 48.8086 172.891 47.8412C171.19 46.8738 169.889 45.5394 168.988 43.8381C168.088 42.1034 167.587 40.1353 167.487 37.9336C167.454 37.3665 167.437 36.6492 167.437 35.7819C167.437 34.8812 167.454 34.164 167.487 33.6303C167.587 31.3952 168.088 29.427 168.988 27.7257C169.922 26.0244 171.24 24.69 172.941 23.7226C174.643 22.7552 176.744 22.2715 179.246 22.2715C181.748 22.2715 183.85 22.7552 185.551 23.7226C187.252 24.69 188.553 26.0244 189.454 27.7257C190.388 29.427 190.905 31.3952 191.005 33.6303C191.039 34.164 191.055 34.8812 191.055 35.7819C191.055 36.6492 191.039 37.3665 191.005 37.9336C190.905 40.1353 190.405 42.1034 189.504 43.8381C188.603 45.5394 187.302 46.8738 185.601 47.8412C183.9 48.8086 181.781 49.2923 179.246 49.2923ZM179.246 45.4393C181.314 45.4393 182.966 44.7888 184.2 43.4878C185.434 42.1535 186.101 40.2187 186.201 37.6834C186.235 37.183 186.251 36.5492 186.251 35.7819C186.251 35.0147 186.235 34.3808 186.201 33.8805C186.101 31.3452 185.434 29.427 184.2 28.126C182.966 26.7917 181.314 26.1245 179.246 26.1245C177.178 26.1245 175.51 26.7917 174.242 28.126C173.008 29.427 172.357 31.3452 172.291 33.8805C172.257 34.3808 172.241 35.0147 172.241 35.7819C172.241 36.5492 172.257 37.183 172.291 37.6834C172.357 40.2187 173.008 42.1535 174.242 43.4878C175.51 44.7888 177.178 45.4393 179.246 45.4393Z"
        fill="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M203.672 48.7919C203.172 48.7919 202.771 48.6752 202.471 48.4417C202.204 48.2081 201.988 47.9079 201.821 47.541L192.564 24.3231C192.497 24.1563 192.464 23.9895 192.464 23.8227C192.464 23.5225 192.564 23.2723 192.764 23.0721C192.964 22.872 193.214 22.7719 193.514 22.7719H195.916C196.283 22.7719 196.567 22.872 196.767 23.0721C196.967 23.2723 197.084 23.4558 197.117 23.6226L204.773 43.3377L212.379 23.6226C212.446 23.4558 212.562 23.2723 212.729 23.0721C212.929 22.872 213.213 22.7719 213.58 22.7719H216.032C216.299 22.7719 216.532 22.872 216.732 23.0721C216.966 23.2723 217.083 23.5225 217.083 23.8227C217.083 23.9895 217.049 24.1563 216.982 24.3231L207.675 47.541C207.542 47.9079 207.325 48.2081 207.025 48.4417C206.758 48.6752 206.358 48.7919 205.824 48.7919H203.672Z"
        fill="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M227.319 49.2923C225.651 49.2923 224.133 48.9587 222.765 48.2915C221.398 47.6244 220.297 46.7237 219.463 45.5895C218.629 44.4553 218.212 43.1709 218.212 41.7365C218.212 39.4347 219.146 37.6 221.014 36.2323C222.882 34.8645 225.317 33.9638 228.32 33.5302L235.775 32.4794V31.0283C235.775 29.427 235.308 28.1761 234.374 27.2754C233.474 26.3747 231.989 25.9243 229.921 25.9243C228.42 25.9243 227.202 26.2246 226.268 26.825C225.367 27.4255 224.734 28.1927 224.367 29.1268C224.166 29.6272 223.816 29.8774 223.316 29.8774H221.064C220.697 29.8774 220.414 29.7773 220.213 29.5771C220.047 29.3436 219.963 29.0768 219.963 28.7765C219.963 28.2761 220.147 27.659 220.514 26.9251C220.914 26.1912 221.514 25.474 222.315 24.7734C223.116 24.0729 224.133 23.4891 225.367 23.0221C226.635 22.5217 228.17 22.2715 229.971 22.2715C231.972 22.2715 233.657 22.5384 235.025 23.0721C236.393 23.5725 237.46 24.2564 238.227 25.1237C239.028 25.991 239.595 26.9751 239.929 28.076C240.296 29.1768 240.479 30.2944 240.479 31.4286V47.641C240.479 47.9746 240.362 48.2582 240.129 48.4917C239.929 48.6919 239.662 48.7919 239.328 48.7919H237.026C236.659 48.7919 236.376 48.6919 236.176 48.4917C235.976 48.2582 235.875 47.9746 235.875 47.641V45.4894C235.442 46.0899 234.858 46.6903 234.124 47.2908C233.39 47.8579 232.473 48.3416 231.372 48.7419C230.271 49.1088 228.92 49.2923 227.319 49.2923ZM228.37 45.5394C229.737 45.5394 230.988 45.2559 232.123 44.6888C233.257 44.0883 234.141 43.1709 234.775 41.9367C235.442 40.7024 235.775 39.1512 235.775 37.2831V35.882L229.971 36.7326C227.602 37.0662 225.818 37.6333 224.617 38.434C223.416 39.2012 222.815 40.1853 222.815 41.3862C222.815 42.3203 223.082 43.1042 223.616 43.738C224.183 44.3385 224.884 44.7888 225.718 45.0891C226.585 45.3893 227.469 45.5394 228.37 45.5394Z"
        fill="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M90.3655 48.7919C90.0319 48.7919 89.7483 48.6919 89.5148 48.4917C89.3147 48.2582 89.2146 47.9746 89.2146 47.641V45.8897C89.2146 45.5895 89.2813 45.3059 89.4148 45.039C89.5815 44.7722 89.7483 44.522 89.9151 44.2885L103.726 26.7249H90.8158C90.4822 26.7249 90.1987 26.6249 89.9652 26.4247C89.765 26.2246 89.6649 25.941 89.6649 25.5741V23.9228C89.6649 23.5892 89.765 23.3223 89.9652 23.1222C90.1987 22.8887 90.4822 22.7719 90.8158 22.7719C97.7725 22.7719 101.673 22.7719 108.63 22.7719C108.963 22.7719 109.23 22.8887 109.43 23.1222C109.664 23.3223 109.78 23.5892 109.78 23.9228C109.78 24.6458 109.78 25.0512 109.78 25.7742C109.78 26.0744 109.697 26.3413 109.53 26.5748C109.397 26.8083 109.247 27.0585 109.08 27.3254L95.4194 44.8389H108.98C109.313 44.8389 109.58 44.939 109.78 45.1391C110.014 45.3393 110.131 45.6228 110.131 45.9898V47.641C110.131 47.9746 110.014 48.2582 109.78 48.4917C109.58 48.6919 109.313 48.7919 108.98 48.7919H90.3655Z"
        stroke="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M125.108 49.2923C121.672 49.2923 118.937 48.2415 116.902 46.1399C114.867 44.0049 113.749 41.1027 113.549 37.4332C113.516 36.9995 113.499 36.4491 113.499 35.7819C113.499 35.0814 113.516 34.5143 113.549 34.0806C113.683 31.7121 114.233 29.6439 115.201 27.8758C116.168 26.0744 117.486 24.69 119.154 23.7226C120.855 22.7552 122.84 22.2715 125.108 22.2715C127.644 22.2715 129.762 22.8053 131.463 23.8727C133.198 24.9402 134.515 26.4581 135.416 28.4263C136.317 30.3944 136.767 32.6962 136.767 35.3316V36.1822C136.767 36.5492 136.65 36.8327 136.417 37.0329C136.217 37.233 135.95 37.3331 135.616 37.3331H118.303C118.303 37.3665 118.303 37.4332 118.303 37.5333C118.303 37.6333 118.303 37.7167 118.303 37.7835C118.37 39.1512 118.67 40.4355 119.204 41.6364C119.737 42.804 120.505 43.7547 121.505 44.4886C122.506 45.2225 123.707 45.5895 125.108 45.5895C126.309 45.5895 127.31 45.406 128.111 45.039C128.911 44.6721 129.562 44.2718 130.062 43.8381C130.562 43.3711 130.896 43.0208 131.063 42.7873C131.363 42.3536 131.597 42.1034 131.763 42.0367C131.93 41.9367 132.197 41.8866 132.564 41.8866H134.966C135.299 41.8866 135.566 41.9867 135.766 42.1868C136 42.3536 136.1 42.6038 136.067 42.9374C136.033 43.4378 135.766 44.0549 135.266 44.7888C134.766 45.4894 134.048 46.1899 133.114 46.8905C132.18 47.591 131.046 48.1748 129.712 48.6418C128.377 49.0755 126.843 49.2923 125.108 49.2923ZM118.303 33.8805H132.014V33.7303C132.014 32.2292 131.73 30.8948 131.163 29.7273C130.629 28.5597 129.845 27.6423 128.811 26.9751C127.777 26.2746 126.543 25.9243 125.108 25.9243C123.674 25.9243 122.44 26.2746 121.405 26.9751C120.405 27.6423 119.637 28.5597 119.104 29.7273C118.57 30.8948 118.303 32.2292 118.303 33.7303V33.8805Z"
        stroke="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M141.728 48.7919C141.395 48.7919 141.111 48.6919 140.878 48.4917C140.677 48.2582 140.577 47.9746 140.577 47.641V23.9228C140.577 23.5892 140.677 23.3223 140.878 23.1222C141.111 22.8887 141.395 22.7719 141.728 22.7719H144.08C144.414 22.7719 144.68 22.8887 144.881 23.1222C145.114 23.3223 145.231 23.5892 145.231 23.9228V26.1245C146.098 24.9903 147.182 24.0729 148.483 23.3724C149.818 22.6385 151.519 22.2715 153.587 22.2715C155.756 22.2715 157.59 22.7552 159.092 23.7226C160.626 24.6567 161.777 25.9744 162.544 27.6757C163.312 29.3436 163.695 31.2951 163.695 33.5302V47.641C163.695 47.9746 163.595 48.2582 163.395 48.4917C163.195 48.6919 162.928 48.7919 162.594 48.7919H160.092C159.759 48.7919 159.475 48.6919 159.242 48.4917C159.042 48.2582 158.941 47.9746 158.941 47.641V33.7804C158.941 31.4452 158.374 29.6272 157.24 28.3262C156.106 26.9918 154.438 26.3246 152.236 26.3246C150.168 26.3246 148.5 26.9918 147.232 28.3262C145.998 29.6272 145.381 31.4452 145.381 33.7804V47.641C145.381 47.9746 145.264 48.2582 145.031 48.4917C144.831 48.6919 144.564 48.7919 144.23 48.7919H141.728Z"
        stroke="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M179.246 49.2923C176.711 49.2923 174.593 48.8086 172.891 47.8412C171.19 46.8738 169.889 45.5394 168.988 43.8381C168.088 42.1034 167.587 40.1353 167.487 37.9336C167.454 37.3665 167.437 36.6492 167.437 35.7819C167.437 34.8812 167.454 34.164 167.487 33.6303C167.587 31.3952 168.088 29.427 168.988 27.7257C169.922 26.0244 171.24 24.69 172.941 23.7226C174.643 22.7552 176.744 22.2715 179.246 22.2715C181.748 22.2715 183.85 22.7552 185.551 23.7226C187.252 24.69 188.553 26.0244 189.454 27.7257C190.388 29.427 190.905 31.3952 191.005 33.6303C191.039 34.164 191.055 34.8812 191.055 35.7819C191.055 36.6492 191.039 37.3665 191.005 37.9336C190.905 40.1353 190.405 42.1034 189.504 43.8381C188.603 45.5394 187.302 46.8738 185.601 47.8412C183.9 48.8086 181.781 49.2923 179.246 49.2923ZM179.246 45.4393C181.314 45.4393 182.966 44.7888 184.2 43.4878C185.434 42.1535 186.101 40.2187 186.201 37.6834C186.235 37.183 186.251 36.5492 186.251 35.7819C186.251 35.0147 186.235 34.3808 186.201 33.8805C186.101 31.3452 185.434 29.427 184.2 28.126C182.966 26.7917 181.314 26.1245 179.246 26.1245C177.178 26.1245 175.51 26.7917 174.242 28.126C173.008 29.427 172.357 31.3452 172.291 33.8805C172.257 34.3808 172.241 35.0147 172.241 35.7819C172.241 36.5492 172.257 37.183 172.291 37.6834C172.357 40.2187 173.008 42.1535 174.242 43.4878C175.51 44.7888 177.178 45.4393 179.246 45.4393Z"
        stroke="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M203.672 48.7919C203.172 48.7919 202.771 48.6752 202.471 48.4417C202.204 48.2081 201.988 47.9079 201.821 47.541L192.564 24.3231C192.497 24.1563 192.464 23.9895 192.464 23.8227C192.464 23.5225 192.564 23.2723 192.764 23.0721C192.964 22.872 193.214 22.7719 193.514 22.7719H195.916C196.283 22.7719 196.567 22.872 196.767 23.0721C196.967 23.2723 197.084 23.4558 197.117 23.6226L204.773 43.3377L212.379 23.6226C212.446 23.4558 212.562 23.2723 212.729 23.0721C212.929 22.872 213.213 22.7719 213.58 22.7719H216.032C216.299 22.7719 216.532 22.872 216.732 23.0721C216.966 23.2723 217.083 23.5225 217.083 23.8227C217.083 23.9895 217.049 24.1563 216.982 24.3231L207.675 47.541C207.542 47.9079 207.325 48.2081 207.025 48.4417C206.758 48.6752 206.358 48.7919 205.824 48.7919H203.672Z"
        stroke="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M227.319 49.2923C225.651 49.2923 224.133 48.9587 222.765 48.2915C221.398 47.6244 220.297 46.7237 219.463 45.5895C218.629 44.4553 218.212 43.1709 218.212 41.7365C218.212 39.4347 219.146 37.6 221.014 36.2323C222.882 34.8645 225.317 33.9638 228.32 33.5302L235.775 32.4794V31.0283C235.775 29.427 235.308 28.1761 234.374 27.2754C233.474 26.3747 231.989 25.9243 229.921 25.9243C228.42 25.9243 227.202 26.2246 226.268 26.825C225.367 27.4255 224.734 28.1927 224.367 29.1268C224.166 29.6272 223.816 29.8774 223.316 29.8774H221.064C220.697 29.8774 220.414 29.7773 220.213 29.5771C220.047 29.3436 219.963 29.0768 219.963 28.7765C219.963 28.2761 220.147 27.659 220.514 26.9251C220.914 26.1912 221.514 25.474 222.315 24.7734C223.116 24.0729 224.133 23.4891 225.367 23.0221C226.635 22.5217 228.17 22.2715 229.971 22.2715C231.972 22.2715 233.657 22.5384 235.025 23.0721C236.393 23.5725 237.46 24.2564 238.227 25.1237C239.028 25.991 239.595 26.9751 239.929 28.076C240.296 29.1768 240.479 30.2944 240.479 31.4286V47.641C240.479 47.9746 240.362 48.2582 240.129 48.4917C239.929 48.6919 239.662 48.7919 239.328 48.7919H237.026C236.659 48.7919 236.376 48.6919 236.176 48.4917C235.976 48.2582 235.875 47.9746 235.875 47.641V45.4894C235.442 46.0899 234.858 46.6903 234.124 47.2908C233.39 47.8579 232.473 48.3416 231.372 48.7419C230.271 49.1088 228.92 49.2923 227.319 49.2923ZM228.37 45.5394C229.737 45.5394 230.988 45.2559 232.123 44.6888C233.257 44.0883 234.141 43.1709 234.775 41.9367C235.442 40.7024 235.775 39.1512 235.775 37.2831V35.882L229.971 36.7326C227.602 37.0662 225.818 37.6333 224.617 38.434C223.416 39.2012 222.815 40.1853 222.815 41.3862C222.815 42.3203 223.082 43.1042 223.616 43.738C224.183 44.3385 224.884 44.7888 225.718 45.0891C226.585 45.3893 227.469 45.5394 228.37 45.5394Z"
        stroke="#040F23"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M92.0285 56.2074V68.7815H90.3617V56.2074H92.0285Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M97.2999 61.4322V68.7815H95.7022V59.4373H97.2136L97.2999 61.4322ZM96.9199 63.7553L96.2549 63.7294C96.2607 63.0903 96.3557 62.5002 96.5399 61.959C96.7242 61.4121 96.9833 60.9371 97.3172 60.5341C97.6511 60.131 98.0484 59.8202 98.509 59.6014C98.9753 59.3768 99.4906 59.2646 100.055 59.2646C100.515 59.2646 100.93 59.3279 101.298 59.4546C101.667 59.5755 101.981 59.7712 102.24 60.0418C102.505 60.3124 102.706 60.6636 102.844 61.0954C102.982 61.5215 103.052 62.0425 103.052 62.6585V68.7815H101.445V62.6413C101.445 62.1519 101.373 61.7604 101.229 61.4668C101.085 61.1674 100.875 60.9515 100.599 60.8191C100.323 60.6809 99.9828 60.6118 99.5798 60.6118C99.1826 60.6118 98.8199 60.6953 98.4917 60.8622C98.1693 61.0292 97.89 61.2595 97.654 61.5531C97.4237 61.8467 97.2423 62.1836 97.1099 62.5635C96.9833 62.9378 96.9199 63.335 96.9199 63.7553Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M111.803 66.303C111.803 66.0727 111.752 65.8596 111.648 65.6639C111.55 65.4624 111.346 65.281 111.035 65.1198C110.73 64.9529 110.269 64.8089 109.653 64.688C109.135 64.5786 108.666 64.4491 108.245 64.2994C107.831 64.1497 107.477 63.9683 107.183 63.7553C106.895 63.5423 106.673 63.2919 106.518 63.004C106.363 62.7161 106.285 62.3793 106.285 61.9936C106.285 61.6251 106.365 61.2768 106.527 60.9486C106.694 60.6204 106.927 60.3297 107.226 60.0764C107.531 59.823 107.897 59.6244 108.323 59.4805C108.749 59.3365 109.224 59.2646 109.748 59.2646C110.496 59.2646 111.135 59.397 111.665 59.6618C112.195 59.9267 112.601 60.2807 112.883 60.7241C113.165 61.1616 113.306 61.6481 113.306 62.1836H111.708C111.708 61.9245 111.631 61.674 111.475 61.4322C111.325 61.1846 111.104 60.9803 110.81 60.8191C110.522 60.6578 110.168 60.5772 109.748 60.5772C109.305 60.5772 108.945 60.6463 108.668 60.7845C108.398 60.9169 108.199 61.0868 108.073 61.294C107.952 61.5013 107.891 61.7201 107.891 61.9504C107.891 62.1231 107.92 62.2786 107.978 62.4167C108.041 62.5491 108.15 62.6729 108.306 62.7881C108.461 62.8975 108.68 63.0011 108.962 63.099C109.244 63.1969 109.604 63.2947 110.042 63.3926C110.807 63.5653 111.438 63.7726 111.933 64.0144C112.428 64.2562 112.796 64.5527 113.038 64.9039C113.28 65.2551 113.401 65.6812 113.401 66.1821C113.401 66.5908 113.315 66.9651 113.142 67.3047C112.975 67.6444 112.73 67.9381 112.408 68.1856C112.091 68.4274 111.711 68.6174 111.268 68.7556C110.83 68.888 110.338 68.9542 109.791 68.9542C108.968 68.9542 108.271 68.8074 107.701 68.5138C107.131 68.2202 106.699 67.8402 106.406 67.3738C106.112 66.9075 105.965 66.4152 105.965 65.8971H107.572C107.595 66.3346 107.721 66.6829 107.952 66.942C108.182 67.1954 108.464 67.3767 108.798 67.4861C109.132 67.5897 109.463 67.6415 109.791 67.6415C110.229 67.6415 110.594 67.584 110.888 67.4688C111.187 67.3537 111.415 67.1954 111.57 66.9938C111.726 66.7923 111.803 66.562 111.803 66.303Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M122.101 66.6225V59.4373H123.707V68.7815H122.179L122.101 66.6225ZM122.403 64.6535L123.068 64.6362C123.068 65.258 123.002 65.8337 122.87 66.3634C122.743 66.8873 122.536 67.3422 122.248 67.7279C121.96 68.1137 121.583 68.4159 121.116 68.6347C120.65 68.8477 120.083 68.9542 119.415 68.9542C118.96 68.9542 118.543 68.888 118.163 68.7556C117.789 68.6232 117.466 68.4188 117.196 68.1424C116.925 67.8661 116.715 67.5063 116.565 67.0629C116.421 66.6196 116.349 66.0871 116.349 65.4653V59.4373H117.947V65.4825C117.947 65.9028 117.993 66.2511 118.085 66.5275C118.183 66.7981 118.313 67.014 118.474 67.1752C118.641 67.3307 118.825 67.44 119.027 67.5034C119.234 67.5667 119.447 67.5984 119.666 67.5984C120.345 67.5984 120.883 67.4688 121.281 67.2097C121.678 66.9449 121.963 66.5908 122.136 66.1475C122.314 65.6984 122.403 65.2004 122.403 64.6535Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M128.616 61.294V68.7815H127.01V59.4373H128.53L128.616 61.294ZM128.288 63.7553L127.545 63.7294C127.551 63.0903 127.634 62.5002 127.796 61.959C127.957 61.4121 128.196 60.9371 128.512 60.5341C128.829 60.131 129.223 59.8202 129.696 59.6014C130.168 59.3768 130.715 59.2646 131.336 59.2646C131.774 59.2646 132.177 59.3279 132.545 59.4546C132.914 59.5755 133.233 59.7683 133.504 60.0332C133.775 60.298 133.985 60.6377 134.134 61.0522C134.284 61.4668 134.359 61.9677 134.359 62.5549V68.7815H132.761V62.6326C132.761 62.1433 132.678 61.7518 132.511 61.4581C132.35 61.1645 132.119 60.9515 131.82 60.8191C131.521 60.6809 131.169 60.6118 130.766 60.6118C130.294 60.6118 129.9 60.6953 129.583 60.8622C129.267 61.0292 129.013 61.2595 128.823 61.5531C128.633 61.8467 128.495 62.1836 128.409 62.5635C128.328 62.9378 128.288 63.335 128.288 63.7553ZM134.342 62.8744L133.271 63.2026C133.277 62.6902 133.36 62.1979 133.521 61.7258C133.688 61.2537 133.927 60.8334 134.238 60.465C134.555 60.0965 134.943 59.8058 135.404 59.5927C135.865 59.374 136.391 59.2646 136.984 59.2646C137.485 59.2646 137.929 59.3308 138.314 59.4632C138.706 59.5956 139.034 59.8 139.299 60.0764C139.569 60.347 139.774 60.6953 139.912 61.1213C140.05 61.5474 140.119 62.054 140.119 62.6413V68.7815H138.513V62.624C138.513 62.1001 138.429 61.6942 138.263 61.4063C138.101 61.1127 137.871 60.9083 137.572 60.7931C137.278 60.6722 136.927 60.6118 136.518 60.6118C136.167 60.6118 135.856 60.6722 135.585 60.7931C135.315 60.9141 135.087 61.081 134.903 61.294C134.719 61.5013 134.578 61.7402 134.48 62.0108C134.388 62.2814 134.342 62.5693 134.342 62.8744Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M142.999 64.213V64.0144C142.999 63.3408 143.096 62.7161 143.292 62.1404C143.488 61.5589 143.77 61.0551 144.138 60.6291C144.507 60.1973 144.953 59.8633 145.477 59.6273C146.001 59.3855 146.588 59.2646 147.239 59.2646C147.895 59.2646 148.485 59.3855 149.009 59.6273C149.539 59.8633 149.988 60.1973 150.356 60.6291C150.731 61.0551 151.016 61.5589 151.211 62.1404C151.407 62.7161 151.505 63.3408 151.505 64.0144V64.213C151.505 64.8866 151.407 65.5113 151.211 66.0871C151.016 66.6628 150.731 67.1666 150.356 67.5984C149.988 68.0244 149.542 68.3583 149.018 68.6002C148.5 68.8362 147.912 68.9542 147.256 68.9542C146.6 68.9542 146.01 68.8362 145.486 68.6002C144.962 68.3583 144.513 68.0244 144.138 67.5984C143.77 67.1666 143.488 66.6628 143.292 66.0871C143.096 65.5113 142.999 64.8866 142.999 64.213ZM144.596 64.0144V64.213C144.596 64.6794 144.651 65.1198 144.76 65.5343C144.87 65.9431 145.034 66.3058 145.253 66.6225C145.477 66.9391 145.756 67.1896 146.09 67.3738C146.424 67.5523 146.813 67.6415 147.256 67.6415C147.694 67.6415 148.077 67.5523 148.405 67.3738C148.739 67.1896 149.015 66.9391 149.234 66.6225C149.453 66.3058 149.617 65.9431 149.726 65.5343C149.841 65.1198 149.899 64.6794 149.899 64.213V64.0144C149.899 63.5538 149.841 63.1191 149.726 62.7104C149.617 62.2958 149.45 61.9302 149.225 61.6136C149.006 61.2912 148.73 61.0378 148.396 60.8536C148.068 60.6694 147.682 60.5772 147.239 60.5772C146.801 60.5772 146.416 60.6694 146.082 60.8536C145.753 61.0378 145.477 61.2912 145.253 61.6136C145.034 61.9302 144.87 62.2958 144.76 62.7104C144.651 63.1191 144.596 63.5538 144.596 64.0144Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M159.834 66.303C159.834 66.0727 159.782 65.8596 159.678 65.6639C159.58 65.4624 159.376 65.281 159.065 65.1198C158.76 64.9529 158.299 64.8089 157.683 64.688C157.165 64.5786 156.696 64.4491 156.276 64.2994C155.861 64.1497 155.507 63.9683 155.213 63.7553C154.926 63.5423 154.704 63.2919 154.548 63.004C154.393 62.7161 154.315 62.3793 154.315 61.9936C154.315 61.6251 154.396 61.2768 154.557 60.9486C154.724 60.6204 154.957 60.3297 155.257 60.0764C155.562 59.823 155.927 59.6244 156.353 59.4805C156.779 59.3365 157.254 59.2646 157.778 59.2646C158.527 59.2646 159.166 59.397 159.695 59.6618C160.225 59.9267 160.631 60.2807 160.913 60.7241C161.195 61.1616 161.336 61.6481 161.336 62.1836H159.739C159.739 61.9245 159.661 61.674 159.506 61.4322C159.356 61.1846 159.134 60.9803 158.841 60.8191C158.553 60.6578 158.199 60.5772 157.778 60.5772C157.335 60.5772 156.975 60.6463 156.699 60.7845C156.428 60.9169 156.23 61.0868 156.103 61.294C155.982 61.5013 155.922 61.7201 155.922 61.9504C155.922 62.1231 155.95 62.2786 156.008 62.4167C156.071 62.5491 156.181 62.6729 156.336 62.7881C156.492 62.8975 156.71 63.0011 156.992 63.099C157.275 63.1969 157.634 63.2947 158.072 63.3926C158.838 63.5653 159.468 63.7726 159.963 64.0144C160.458 64.2562 160.827 64.5527 161.069 64.9039C161.31 65.2551 161.431 65.6812 161.431 66.1821C161.431 66.5908 161.345 66.9651 161.172 67.3047C161.005 67.6444 160.761 67.9381 160.438 68.1856C160.122 68.4274 159.742 68.6174 159.298 68.7556C158.861 68.888 158.368 68.9542 157.821 68.9542C156.998 68.9542 156.302 68.8074 155.732 68.5138C155.162 68.2202 154.73 67.8402 154.436 67.3738C154.143 66.9075 153.996 66.4152 153.996 65.8971H155.602C155.625 66.3346 155.752 66.6829 155.982 66.942C156.212 67.1954 156.494 67.3767 156.828 67.4861C157.162 67.5897 157.493 67.6415 157.821 67.6415C158.259 67.6415 158.625 67.584 158.918 67.4688C159.218 67.3537 159.445 67.1954 159.601 66.9938C159.756 66.7923 159.834 66.562 159.834 66.303Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M170.454 56.2074H172.069L176.189 66.4584L180.299 56.2074H181.923L176.81 68.7815H175.55L170.454 56.2074ZM169.928 56.2074H171.352L171.586 63.8762V68.7815H169.928V56.2074ZM181.016 56.2074H182.441V68.7815H180.783V63.8762L181.016 56.2074Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M189.889 68.9542C189.238 68.9542 188.648 68.8448 188.119 68.6261C187.595 68.4015 187.143 68.0877 186.763 67.6847C186.388 67.2817 186.101 66.8039 185.899 66.2511C185.698 65.6984 185.597 65.0939 185.597 64.4376V64.0749C185.597 63.3149 185.709 62.6384 185.934 62.0454C186.158 61.4466 186.463 60.94 186.849 60.5254C187.235 60.1109 187.672 59.7971 188.162 59.5841C188.651 59.3711 189.158 59.2646 189.682 59.2646C190.35 59.2646 190.925 59.3797 191.409 59.61C191.898 59.8403 192.298 60.1627 192.609 60.5772C192.92 60.986 193.15 61.4696 193.3 62.0281C193.45 62.5808 193.525 63.1853 193.525 63.8417V64.5585H186.547V63.2544H191.927V63.1335C191.904 62.719 191.818 62.316 191.668 61.9245C191.524 61.533 191.294 61.2106 190.977 60.9572C190.66 60.7039 190.229 60.5772 189.682 60.5772C189.319 60.5772 188.985 60.655 188.68 60.8104C188.375 60.9601 188.113 61.1846 187.894 61.484C187.675 61.7834 187.505 62.149 187.384 62.5808C187.264 63.0126 187.203 63.5106 187.203 64.0749V64.4376C187.203 64.8809 187.264 65.2983 187.384 65.6898C187.511 66.0755 187.692 66.4152 187.929 66.7089C188.17 67.0025 188.461 67.2328 188.801 67.3997C189.146 67.5667 189.538 67.6502 189.975 67.6502C190.54 67.6502 191.017 67.535 191.409 67.3047C191.8 67.0744 192.143 66.7664 192.437 66.3807L193.404 67.1493C193.202 67.4544 192.946 67.7452 192.635 68.0215C192.324 68.2979 191.941 68.5224 191.487 68.6952C191.038 68.8679 190.505 68.9542 189.889 68.9542ZM188.792 58.0555L190.468 55.5165H192.393L190.079 58.0555H188.792Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M202.164 66.9679V55.5165H203.771V68.7815H202.302L202.164 66.9679ZM195.877 64.213V64.0317C195.877 63.3178 195.964 62.6701 196.136 62.0886C196.315 61.5013 196.565 60.9975 196.888 60.5772C197.216 60.157 197.604 59.8345 198.053 59.61C198.508 59.3797 199.015 59.2646 199.573 59.2646C200.161 59.2646 200.673 59.3682 201.111 59.5755C201.554 59.777 201.928 60.0735 202.233 60.465C202.544 60.8507 202.789 61.3171 202.967 61.864C203.146 62.411 203.27 63.0299 203.339 63.7208V64.5153C203.275 65.2004 203.152 65.8165 202.967 66.3634C202.789 66.9104 202.544 67.3767 202.233 67.7625C201.928 68.1482 201.554 68.4447 201.111 68.652C200.667 68.8535 200.149 68.9542 199.556 68.9542C199.009 68.9542 198.508 68.8362 198.053 68.6002C197.604 68.3641 197.216 68.0331 196.888 67.607C196.565 67.181 196.315 66.6801 196.136 66.1043C195.964 65.5228 195.877 64.8924 195.877 64.213ZM197.483 64.0317V64.213C197.483 64.6794 197.53 65.1169 197.622 65.5257C197.72 65.9345 197.869 66.2943 198.071 66.6052C198.272 66.9161 198.528 67.1608 198.839 67.3393C199.15 67.512 199.522 67.5984 199.953 67.5984C200.483 67.5984 200.918 67.4861 201.257 67.2616C201.603 67.037 201.879 66.7405 202.087 66.372C202.294 66.0036 202.455 65.6034 202.57 65.1716V63.0903C202.501 62.7737 202.4 62.4685 202.268 62.1749C202.141 61.8755 201.974 61.6107 201.767 61.3804C201.565 61.1443 201.315 60.9572 201.016 60.8191C200.722 60.6809 200.374 60.6118 199.971 60.6118C199.533 60.6118 199.156 60.7039 198.839 60.8881C198.528 61.0666 198.272 61.3142 198.071 61.6308C197.869 61.9417 197.72 62.3045 197.622 62.719C197.53 63.1278 197.483 63.5653 197.483 64.0317Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M208.878 59.4373V68.7815H207.272V59.4373H208.878ZM207.151 56.9587C207.151 56.6997 207.228 56.4809 207.384 56.3024C207.545 56.1239 207.781 56.0347 208.092 56.0347C208.397 56.0347 208.63 56.1239 208.792 56.3024C208.959 56.4809 209.042 56.6997 209.042 56.9587C209.042 57.2063 208.959 57.4193 208.792 57.5978C208.63 57.7705 208.397 57.8569 208.092 57.8569C207.781 57.8569 207.545 57.7705 207.384 57.5978C207.228 57.4193 207.151 57.2063 207.151 56.9587Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M216.067 67.6415C216.447 67.6415 216.798 67.5638 217.12 67.4084C217.443 67.2529 217.707 67.0399 217.915 66.7693C218.122 66.493 218.24 66.1792 218.269 65.828H219.789C219.76 66.3807 219.573 66.896 219.227 67.3738C218.888 67.8459 218.441 68.2288 217.889 68.5224C217.336 68.8103 216.729 68.9542 216.067 68.9542C215.364 68.9542 214.751 68.8304 214.227 68.5829C213.709 68.3353 213.277 67.9956 212.932 67.5638C212.592 67.132 212.336 66.6369 212.163 66.0784C211.996 65.5142 211.913 64.9183 211.913 64.2908V63.928C211.913 63.3005 211.996 62.7075 212.163 62.149C212.336 61.5848 212.592 61.0868 212.932 60.655C213.277 60.2232 213.709 59.8835 214.227 59.6359C214.751 59.3883 215.364 59.2646 216.067 59.2646C216.798 59.2646 217.437 59.4143 217.984 59.7136C218.531 60.0073 218.96 60.4103 219.271 60.9227C219.587 61.4293 219.76 62.0051 219.789 62.6499H218.269C218.24 62.2642 218.131 61.9158 217.941 61.6049C217.756 61.294 217.503 61.0465 217.181 60.8622C216.864 60.6722 216.493 60.5772 216.067 60.5772C215.577 60.5772 215.166 60.6751 214.832 60.8709C214.503 61.0609 214.241 61.3199 214.046 61.6481C213.856 61.9705 213.718 62.3304 213.631 62.7276C213.551 63.1191 213.51 63.5193 213.51 63.928V64.2908C213.51 64.6995 213.551 65.1025 213.631 65.4998C213.712 65.8971 213.847 66.2569 214.037 66.5793C214.233 66.9017 214.495 67.1608 214.823 67.3566C215.157 67.5466 215.571 67.6415 216.067 67.6415Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M222.046 64.213V64.0144C222.046 63.3408 222.144 62.7161 222.34 62.1404C222.536 61.5589 222.818 61.0551 223.186 60.6291C223.555 60.1973 224.001 59.8633 224.525 59.6273C225.049 59.3855 225.636 59.2646 226.286 59.2646C226.943 59.2646 227.533 59.3855 228.057 59.6273C228.587 59.8633 229.036 60.1973 229.404 60.6291C229.778 61.0551 230.063 61.5589 230.259 62.1404C230.455 62.7161 230.553 63.3408 230.553 64.0144V64.213C230.553 64.8866 230.455 65.5113 230.259 66.0871C230.063 66.6628 229.778 67.1666 229.404 67.5984C229.036 68.0244 228.589 68.3583 228.066 68.6002C227.547 68.8362 226.96 68.9542 226.304 68.9542C225.647 68.9542 225.057 68.8362 224.533 68.6002C224.009 68.3583 223.56 68.0244 223.186 67.5984C222.818 67.1666 222.536 66.6628 222.34 66.0871C222.144 65.5113 222.046 64.8866 222.046 64.213ZM223.644 64.0144V64.213C223.644 64.6794 223.699 65.1198 223.808 65.5343C223.917 65.9431 224.081 66.3058 224.3 66.6225C224.525 66.9391 224.804 67.1896 225.138 67.3738C225.472 67.5523 225.86 67.6415 226.304 67.6415C226.741 67.6415 227.124 67.5523 227.452 67.3738C227.786 67.1896 228.063 66.9391 228.281 66.6225C228.5 66.3058 228.664 65.9431 228.774 65.5343C228.889 65.1198 228.946 64.6794 228.946 64.213V64.0144C228.946 63.5538 228.889 63.1191 228.774 62.7104C228.664 62.2958 228.497 61.9302 228.273 61.6136C228.054 61.2912 227.778 61.0378 227.444 60.8536C227.116 60.6694 226.73 60.5772 226.286 60.5772C225.849 60.5772 225.463 60.6694 225.129 60.8536C224.801 61.0378 224.525 61.2912 224.3 61.6136C224.081 61.9302 223.917 62.2958 223.808 62.7104C223.699 63.1191 223.644 63.5538 223.644 64.0144Z"
        fill="#828282"
      />
      <path
        shapeRendering="geometricPrecision"
        d="M238.881 66.303C238.881 66.0727 238.83 65.8596 238.726 65.6639C238.628 65.4624 238.424 65.281 238.113 65.1198C237.808 64.9529 237.347 64.8089 236.731 64.688C236.213 64.5786 235.744 64.4491 235.323 64.2994C234.909 64.1497 234.555 63.9683 234.261 63.7553C233.973 63.5423 233.752 63.2919 233.596 63.004C233.441 62.7161 233.363 62.3793 233.363 61.9936C233.363 61.6251 233.443 61.2768 233.605 60.9486C233.772 60.6204 234.005 60.3297 234.304 60.0764C234.609 59.823 234.975 59.6244 235.401 59.4805C235.827 59.3365 236.302 59.2646 236.826 59.2646C237.574 59.2646 238.213 59.397 238.743 59.6618C239.273 59.9267 239.679 60.2807 239.961 60.7241C240.243 61.1616 240.384 61.6481 240.384 62.1836H238.786C238.786 61.9245 238.709 61.674 238.553 61.4322C238.403 61.1846 238.182 60.9803 237.888 60.8191C237.6 60.6578 237.246 60.5772 236.826 60.5772C236.383 60.5772 236.023 60.6463 235.746 60.7845C235.476 60.9169 235.277 61.0868 235.151 61.294C235.03 61.5013 234.969 61.7201 234.969 61.9504C234.969 62.1231 234.998 62.2786 235.056 62.4167C235.119 62.5491 235.228 62.6729 235.384 62.7881C235.539 62.8975 235.758 63.0011 236.04 63.099C236.322 63.1969 236.682 63.2947 237.12 63.3926C237.885 63.5653 238.516 63.7726 239.011 64.0144C239.506 64.2562 239.874 64.5527 240.116 64.9039C240.358 65.2551 240.479 65.6812 240.479 66.1821C240.479 66.5908 240.393 66.9651 240.22 67.3047C240.053 67.6444 239.808 67.9381 239.486 68.1856C239.169 68.4274 238.789 68.6174 238.346 68.7556C237.908 68.888 237.416 68.9542 236.869 68.9542C236.046 68.9542 235.349 68.8074 234.779 68.5138C234.209 68.2202 233.777 67.8402 233.484 67.3738C233.19 66.9075 233.043 66.4152 233.043 65.8971H234.65C234.673 66.3346 234.799 66.6829 235.03 66.942C235.26 67.1954 235.542 67.3767 235.876 67.4861C236.21 67.5897 236.541 67.6415 236.869 67.6415C237.307 67.6415 237.672 67.584 237.966 67.4688C238.265 67.3537 238.493 67.1954 238.648 66.9938C238.804 66.7923 238.881 66.562 238.881 66.303Z"
        fill="#828282"
      />
    </svg>
  );
}