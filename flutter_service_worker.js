'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fa867dcb093ca7ffac63c1299447e51c",
".git/config": "ceafadaefc863f5523817a64c52f0590",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "752873870cbcaa1e91dbdbafc03518da",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32a3cb460ae8d0f326a40381b05aea61",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "040ee8f6cde6f38624301ff0c6dc5308",
".git/logs/refs/heads/main": "6a1a6f7aaa0686d0cc8b1e91f9321880",
".git/logs/refs/remotes/origin/main": "8479631d310fc99059092057f54a0aeb",
".git/objects/02/64cf73043854976381e9a9566aec063991fdd6": "36c34b4715a844647f408672e3c06d02",
".git/objects/04/dabc18af8d126eaede93d8da4cfe3844eaca24": "0082e78677d2e55da0c1335d77c539e0",
".git/objects/0c/eddd638e1ffbd74b47eeb578ffe531029743a7": "f06248f7ca0c38c48db9fe1ba857d84d",
".git/objects/0e/ece69b159e4630ea7bf811a518eb0986455176": "212a84ff21450c6bf481786a2426bb2b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/c0fe82d4e28f1ddaf44910118b1f1795348aa5": "6a8e0094aae642b94e11a8720d32123d",
".git/objects/14/5aa8a040d5ff96e4952944fe7b878beee4c21d": "a0411a475f6506a2eb0d1e165ceb3537",
".git/objects/15/9b177c336b02746b7916fdd3adc193337d49ea": "cd4086a3255e20ef6ad21051c0f3f23d",
".git/objects/16/16252a25f94729acef8dabcf1a381908c6deac": "f8104c6ff90677843dc0349f66d02139",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/85e6d558574a6192ca51929f4f0bad26a80ec9": "0f208529667982035709534cdbed71e6",
".git/objects/1a/de30a1bf68eef5ee900c3150bc4bee22d992d4": "4bc5edda86062979ac3abb3538807175",
".git/objects/1c/9a03c9dab95d752ab9e2cc8b724d1877f4f31d": "edc4601666c9c01631f3b209a8744a19",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/2843c45dd03f5cf00063eb0921b88ea714ab7b": "7e36aa86bfa3e95553d97d8f84b63b14",
".git/objects/27/c071423a3b1525e768ffc397424aad796dcce1": "ef2fe0ed3e6343328f466127549b95e1",
".git/objects/28/f6ec0fce534776e7c1a556074a2642923432fe": "9e0f115aa2fe77d6180c68eca5b9f370",
".git/objects/2a/c82007882beaa1aa18236354fe72da2395733a": "05ddad0cd662ad7e3436f47bf65de1b4",
".git/objects/35/4d09b4e3b4ea77325c21a2030c6aef4aa0a84b": "55dfcdb05ff10a2777f53c14f4fabf0c",
".git/objects/35/a51f8376c9fcf38d0dd786a1bfcd5f3ede1b07": "b43fc43bc7fb550b4a8629bd96406e2d",
".git/objects/39/e13077f4fc378edb7be876a7a74c83bf82026d": "3ccf20efb14d5e4cc2f946f816d78df9",
".git/objects/3a/2cb5d6b1f334f4606a87defc6cf8aa1e7e5c85": "23ddb862134fab7365eff998be77e6fc",
".git/objects/3d/28f16c86a99cdf1eef126b8c800d9109bfef1a": "dda6d2284957c38377a855389a7a05e8",
".git/objects/3d/30a0bc791f778cf4d2596de48480d66b10a18c": "0264200277299f92b4235278df34632d",
".git/objects/3e/8cc20f5e3aee5777dded516f8171e4cb6844c8": "d0bf86135a1715c44ae332916d15475f",
".git/objects/3f/14d3584481824e4b0067be041fde32a3a3a394": "da69070d6068cda78fe07a09bc1ebfa7",
".git/objects/47/ca91ba80bdc9ad5a93c5e6a83e8d7fb6d5cf9a": "f78db45bc9d37aa4ece580163131ad54",
".git/objects/49/65f744225651dc94a75348edf306c2298ef9d5": "d86720b27b1d968f6d6d559dfa2700a6",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/d20015faa3a9c47014a5103a6cda920ed38e39": "d397314646bda95909d5d8c85669e74b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/02a23915341fe790fa265ef81f52a7340045e2": "3de828cf8cd5e081cec7854225fda643",
".git/objects/4c/d793d635c9796e3a519ce04a6967b604f1d280": "3418cdff0c4a804ca12896a71c331931",
".git/objects/52/fd1db8364935192680bcb3e8da67b75237ee84": "24ca5bacdb1d659e675e469528aaf793",
".git/objects/54/4d2046560be396f87464df029b028eb8ace4f1": "22a385d33d355b14c5880ec03aa3db1b",
".git/objects/55/6d0584ed8317b2967556800afa7afb06983ec0": "557a947fff97d658f9d7d0d3c439d399",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/f9857b24e889a88fe5f0ddec2d59cb4c36d975": "286eb351edaf6ed9d4eb8ff185eb0dd6",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/f3f28697ad6189d0d9e51c1e22f8ca099435f6": "0c3a25c9929e11737b4a1390bce7ce0c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/875f1d414eeafd6199b2da10eae65fba150021": "0e891fed359168ca26d469d0c446ceb0",
".git/objects/67/94697477ed45b91b3c256e84f5d550e1fe897f": "cdd4311bf09f13de9a0cf50947947bfb",
".git/objects/6a/d8af5489ccab0ac9e690db7bf420e5b8d0284f": "29cd48feb590f7d3b1549bc0513726c4",
".git/objects/6d/432dbc54749702b23109e111b2838dd516cd7c": "3f34a876ed832203ccf9397ad3f2b6c2",
".git/objects/6f/ec7f19d08e5727fdc593467a83c8f2990e6423": "42055dbfb1df98481ff424aa3b51cb99",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/aeb0141ae15500c240f93d496069f650db58f2": "830c3b0a797590537151d56760948032",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7b/a9e3d4d9e2d9267e4308e56f74a2f637fec2f6": "781e30b3bd1b98bfc579503e3cc67e92",
".git/objects/7e/6fe29d7a95ba5714234b6c0d34c9ed1e4e99fb": "bbb18a84dc2fb002c853955928c03f8b",
".git/objects/7e/d95401a1a34946356b5be6dfec92583970d667": "59fe89efa0bed2829acddf4ed9f77418",
".git/objects/80/28e05225b3a225ca71a2b89dd8ed041576d6b3": "e6bf1f67e9c791617af836c5a7223c5d",
".git/objects/80/6b2e275f440038f6e49d9325e5a3801399568a": "7ef842c7ce9e7a2bf5a8787003e62533",
".git/objects/80/d02c7eaf49e1efa576a81af2f7b002d586b2e5": "4e7ae22bd89d89ca222bd1e5485ddef6",
".git/objects/82/09cc0bf3ed3ae9b9165bd2027f1055965d9fd7": "3e2a167a6858e98ab815f1db8b2d1312",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/7579db232acd247c40f636884a966e5d134dc5": "dcd76bbca4ea4a4d4a410b2728cd4997",
".git/objects/88/63ed3c8c4a6baf7fa73874c2d1a86b3ccaa887": "b2e18d23be92f77779f90eb5e42703e0",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2c04d6dad153437f443e29162a644b809d2706": "f253ecc3de84ad257c2bad520fe0115e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/93/ccf672654ac94feaf55b7bd64737b5b629e2db": "29a130b89c8e0cf0c125fb6a15998611",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/ea160417d6287ee7fbc3a3944846a3aa1c3c63": "111bdc81183d84abdbd498eb666139ee",
".git/objects/99/0543ddbf4f7e61b6a7d6cac0ea76204412fd17": "8fa7736a60364ff96a70f012388ded47",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9e/50ef5bab8ba794f0edadb94d9ef6c7c11e3fdc": "55cff02ff7ecd13b46a522185f50f956",
".git/objects/9e/96a067fdc5ec2befe0fe2cfcd5f8714a81c4b3": "3587ea1f5a43bc2ac03cd8c1d00ed8e5",
".git/objects/9f/6b14f47bc59fb3641e52796b1472b43f44e478": "739874e150c63ef1c5ee8413a5382a74",
".git/objects/a4/9bd1fe076698aa751addadeaac1e4cc2f67c33": "dd583d93902cd03cb9e23cced24a5fe5",
".git/objects/a8/79ed06740a3f25515092d0bac3c8abf88333aa": "f06c1b4c801222fe3f3a5281494a7213",
".git/objects/b0/955c153c8cf45799d0d89cdbee8602edcceefc": "919e8a296f1a8488d27a94467e1fc999",
".git/objects/b1/1d00246355f8639de024c843d3bcffada899c2": "f1a7ee870276fc9c7769d5ed98383f21",
".git/objects/b3/a3737ade48c596905da31051ebf646b8bf1a6b": "86f40244761c3529cf23599fadeb3795",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/fc4ad10712978567d4a5a1ce92661549bbe92a": "b81c45a3de46483432a66d4b10af234d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/87f0b58d5c8410472defebcbd832c0e41c696e": "cd4996c4ee1d15923e5eff1a50d3f68f",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/9556b7eef5bcfe3d79df301ad45debb9bc8ef4": "64841e919b80d676ec1fbed0d3559330",
".git/objects/be/bf13aaa01f46c9797bed60e6ac89f3c195a096": "e5d436eca8fb06f038fd59b531546578",
".git/objects/c1/295ce885bd0d1eb7074fd2583c2fc6b9927af5": "3fe84fe7a9849b793b00e55f85fb45c6",
".git/objects/c2/3ef51d7c77abf13a3f7b863aa8e8e9a2f772d6": "18d7a482aa2ef76eec5a0c6eb7faedf8",
".git/objects/c4/81f63d011bc1e8ad768e2023e5c937a8eb64d6": "80d9cb03d4f225d557e2a368f561c4aa",
".git/objects/c5/458229d2a3d9e706ca42fbc51e793487dba040": "6d651ed8704a5143fee604d26cec5db1",
".git/objects/c5/a86667e05d18cdb3320acbe069c1ab113becfb": "8f4e66181b12b77eeb89f2855665ee99",
".git/objects/c8/1130f0d577896938a049bc5be577cf6719ba9e": "f6a2e52534790323f3ea8824bbd47724",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/77dca95cc901292a1fdf4612a62c79d85b8b4d": "01abed54069b4de753c831a74293aa3d",
".git/objects/cd/de75709152355d185a6fe6040660b47d1901d0": "cf02f9af4c39529d7afb072a87ec5207",
".git/objects/cf/671c34d2c515289a926a07df97a601a48bcdc8": "9fe208fd70f11bb0b8bfad95d7188428",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4593a6693f6368200dade77c8ba836ad0e8fec": "97720b8479a2d07c5ef971d4bc225ebf",
".git/objects/d8/cc928abaed6c7aed89625bd4ae64f14b1e8c33": "b80d4cce56407c075ef193901b99c299",
".git/objects/e3/249599d476399ab3293c68cda0e0926376cf97": "0ec9409de5a3c51aae9f242c36e01ecf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e252ef51034834a31569e9db0a7767cc995e1f": "c3faebc387322a48b1c05de205098de8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/273b096f5eca120317c5dd6b3d836fa02b8d13": "eebb1bd565b1c2862c80be4720b2f293",
".git/objects/f8/7ceb7f0312dd7be44dbbb5ed948d4e5aa64b61": "1aa4aaec68a2eaaaa47fdff84dfbdaba",
".git/objects/fa/624aefca07a87146a90381ee45d0a025d3e507": "8a7e2b02bf2d2950b2b2055492d3604c",
".git/objects/fd/476808a0719da34b5da698d1fff67582f552f1": "8565ce57166b552d949304bcdef194d5",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "ed0f3cb22d7333d69a8ea716ba1f0432",
".git/refs/heads/main": "e92e82ff0bb0b47f8060352d298c121e",
".git/refs/remotes/origin/main": "e92e82ff0bb0b47f8060352d298c121e",
"asset/loading.gif": "9543a0ae4eb381d8437165dae2b90bfb",
"assets/AssetManifest.bin": "56d28a9e7a6debb9dd0ddf19e8e45e21",
"assets/AssetManifest.bin.json": "7a0d32c35abf97be7b926bfb42f5e9d1",
"assets/AssetManifest.json": "365ccfb7da2d5aa7a85f9d40d0fe977f",
"assets/FontManifest.json": "0d648fbcad51ea4cd00cb983ddbccc17",
"assets/fonts/MaterialIcons-Regular.otf": "8dbb9f14da0f0edc4b76051c6157877d",
"assets/images/1.JPG": "2cf67ccbddb7266346f94790def4ad4b",
"assets/images/2.png": "0bd59d9667633c7406765024df34955e",
"assets/images/a.jpg": "1269802a7d3981c92bfa6e5168e1b204",
"assets/images/about.png": "5ff905391d237c42da5f82681182cec9",
"assets/images/b.jpg": "3bc6a689b9b8b5c3c70d7f96628d7ded",
"assets/images/b1.png": "b3d61c808a642de21f571e91ef624498",
"assets/images/b2.png": "19e664f92cc36b92e2128c137f6ac8ff",
"assets/images/b3.png": "c7bbf6708ca97f4134cd30e7611762b3",
"assets/images/b4.png": "bc2af60c565d169713f839cc8aca5fd8",
"assets/images/bg.jpg": "d83027abd1f1635be4c18072951392e8",
"assets/images/bg1.jpg": "f68cb68cdc96feddf585a71829bf1dcd",
"assets/images/bg2.png": "0eadc7f9b59aa3128525f5edf29acaba",
"assets/images/c.jpg": "e287257f8a1796e720dd3f44ed2a8e6b",
"assets/images/Goitom_negash_application_letter_.pdf": "ef04082ef0e575c712a9f86a2bb65583",
"assets/images/logo.png": "403705446bdf08bb4b0b8b64416dca5f",
"assets/images/logo1.png": "20f8a08d7e497a74dbbc90fbe12899db",
"assets/images/logo11.png": "de96bc1ae770f821bcd1fa84ff5a460f",
"assets/images/logo2.png": "d29cbc4737327b7b0126b90c1a8456f7",
"assets/images/logo22.png": "27aa9fd52d7c30c619630c45c1c2bc97",
"assets/images/logo3.png": "31e1f048d47b0d6bb983b03b44e2e545",
"assets/images/logo33.png": "6e1999c65ed2b30fcf8586868d66f139",
"assets/images/logo4.png": "298f86b87c64101e039e8e7fd521d550",
"assets/images/logo44.png": "ccddeb208277311075c83902c5a49073",
"assets/images/logo5.png": "c0d7a7c7d4e7f114b61a3c0238716b3f",
"assets/images/logo55.png": "556c3fa83e375f9e51eb61b9cc5b2800",
"assets/images/logo66.png": "65ff126636d29e0b23fa81052bb83668",
"assets/images/logoo.png": "438ff2b5e2543c1f2e47d099f9fcaff6",
"assets/images/profile.jpg": "6edae08fe838adccb08341cdaf119594",
"assets/NOTICES": "304648ab058f448e32a48f743a688540",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e9bc3a775ae2e874d04062bffa432b72",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "afe66f7ed56bede1fa663e73e77be1a4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/works/Booking/1.png": "24ae6e7b13b765354b36c65fb55cc8db",
"assets/works/Booking/2.png": "f6bc81b6b776b7c7f758d49f5f1f8a6f",
"assets/works/Booking/3.png": "ef94758077d125697fd5cac498ef9817",
"assets/works/Booking/4.png": "77c5f9aa4e0f2b054567297f9d568bee",
"assets/works/Booking/5.png": "ec34c485e54800221c8023e451f40bb5",
"assets/works/Booking/6.png": "7829a8b4beaea5e51cfabe46d567ca26",
"assets/works/Booking/7.png": "9ab12e607bf469639474a8f01752b984",
"assets/works/Booking/8.png": "b7788705c6f8097e9194bfbaf505d588",
"assets/works/eHotel/CuSignup.jpg": "f7ad68cb1a7626795907bf5465551177",
"assets/works/eHotel/CuSignup.png": "76387f5a55c2b2e86a646e1436cf2622",
"assets/works/eHotel/customers.jpg": "f00b609a1d0edb72861f3d5aa80ea9d4",
"assets/works/eHotel/customers.png": "56ea423e4d54fcf771e11b548f9dd753",
"assets/works/eHotel/dashboard.jpg": "25d36e1a80265b4f4ad625dfd1a4d4ff",
"assets/works/eHotel/hotels.jpg": "039586f9a750c593602ad2e897ff23f7",
"assets/works/eHotel/HSignup.jpg": "6e4f4b30b923ee591de46cf1c08427aa",
"assets/works/eHotel/HSignup.png": "7a013e3634835b432af99a676ce85c38",
"assets/works/eHotel/SignIn.jpg": "7c212a0fb12c3c01aed018ade7e5f95f",
"assets/works/eHotel/SignIn.png": "116551aaba539fd4dc93345fa90d2e07",
"assets/works/NileJobs/scrapingSampleCode.png": "6b1af4411c410ce77f12f296ff93e51c",
"assets/works/NileJobs/seekerHomePage.png": "623c7f47335d73a5b4d49ab215a83a06",
"assets/works/NileJobs/signIn.png": "54c1924ddc0605698cc075d3299e9bcc",
"assets/works/NileJobs/signInCode.png": "e85612a2636938ccdd83caef62eb1879",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "20f8a08d7e497a74dbbc90fbe12899db",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b1ff5a35b261c78d6fe7aae3b12665bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "574e0864a17e0216a023de1f2d5797ca",
"/": "574e0864a17e0216a023de1f2d5797ca",
"main.dart.js": "71c50967d691cda797a26abb20fe5d69",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
