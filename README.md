# queerableNFT

This repository is useful for creating NFTs that can change their display according to parameters.
This is achieved by putting a parameter in the URL of the NFT metadata.

Let's test it with a sample.

1. URL : `https://arweave.net/0ays4dJs5D85dsdcCBaY3lObPEDVCV4GE2AdFPyjLyo/`
2. Add parameter to URL : `#?query1=blue&query2=red&query3=circle`
3. Let's access the resulting URL : https://arweave.net/0ays4dJs5D85dsdcCBaY3lObPEDVCV4GE2AdFPyjLyo/#?query1=blue&query2=red&query3=circle
4. Let's change the parameters and check the changes

   - Parameter Configuration : `#?query1={query1}&query2={query2}&query3={query3}`
   - Parameters are as follows

   |       query1        |       query2        |      query3      |
   | :-----------------: | :-----------------: | :--------------: |
   |      bg color       |    object color     |      shape       |
   | Favorite color name | Favorite color name | circle or square |

<br>

## HOW TO CREATE

1. Install the package at `npm i`
2. Put image data in the `assets` folder.
3. Edit `App.tsx`.
4. Run `npm run build` and you're done!

<br>

# How to upload to ardrive

This section describes how to upload the created HTML data to ardrive.
For more information, read Official Documentation : [github - ardriveapp](https://github.com/ardriveapp/ardrive-cli).

<br>

## Preparation

### Install CLI

`npm install -g ardrive-cli`

### Upgrading to the Latest Version

`npm update -g ardrive-cli`

### Get Arweave Wallet

Prepare Arweave Wallet,please check the official website below.

- [Wallet Setup](https://arweave.app/welcome)

- [Explanation of Wallet creation procedure, etc.](https://docs.arweave.org/info/wallets/arweave-wallet)

### Saving private keys

To use the CLI, you will need the private key of arweave's wallet.
Be sure to set up `.gitignore` before saving the private key in your project.

<br>

## Upload to ardrive

### Create Drive

Create a drive to upload the folder.
※Change `{ }` internals accordingly.

`ardrive create-drive --wallet-file {/path/to/my/wallet.json} --drive-name "{My Public Archive}"`

### Upload a folder to the drive

Upload deployed folders.

`ardrive upload-file --local-path {./build} --parent-folder-id {drive entityId} -w {/path/to/my/wallet.json}`

To check the status of an upload, use the following command.

`ardrive tx-status -t "{bundleTxId}"`

The reply is as follows:

- Pending
- Confirming
- Confirmed
- Not Found

Once you are `Confirming`, you can _generally_ move on to the next step!
For more information, see the official documentation.

### Create a manifest in a folder

Once the folder is uploaded, create a manifest in the folder.

`ardrive create-manifest -f "{folder entityId}" -w {/path/to/my/wallet.json}`

The URL at the top of `links` is the URL to be embedded in the NFT metadata.
Please check if the data is properly reflected in your browser.

<br>
Have a good NFT life!

<br>
<br>

# queerableNFT について(日本語)

このリポジトリは、パラメータに応じて表示を変更できる NFT を作成するのに便利です。
これは、NFT のメタデータの URL にパラメータを入れることで実現します。

サンプルでテストしてみましょう。

1. URL : `https://arweave.net/0ays4dJs5D85dsdcCBaY3lObPEDVCV4GE2AdFPyjLyo/`
2. URL にパラメータを追加 : `#?query1=blue&query2=red&query3=circle`
3. 出来上がった URL にアクセスしてみましょう : https://arweave.net/0ays4dJs5D85dsdcCBaY3lObPEDVCV4GE2AdFPyjLyo/#?query1=blue&query2=red&query3=circle
4. パラメータを変更して、変化を確認しよう

   - パラメータ設定 : `#?query1={query1}&query2={query2}&query3={query3}`
   - 各パラメータの値は以下の通りです。

   |      query1      |      query2      |      query3      |
   | :--------------: | :--------------: | :--------------: |
   |      背景色      | オブジェクトの色 | オブジェクトの形 |
   | お好みのカラー名 | お好みのカラー名 | circle or square |

<br>

## 使い方

1. `npm i`にて、パッケージをインストールする。
2. `assets`フォルダに画像データを入れる。
3. `App.ts`を編集する。
4. `npm run build`を実行したら完成！

<br>

# ardrive へのアップロードの仕方（日本語）

ここでは、作成した HTML データ を ardrive にアップロードする方法を説明します。
詳しくは、公式ドキュメントを読んでくださいね。[github - ardriveapp](https://github.com/ardriveapp/ardrive-cli)

<br>

## 事前準備

### CLI のインストール

`npm install -g ardrive-cli`

### パッケージのアップグレード

`npm update -g ardrive-cli`

### Arweave Wallet の準備

Arweave Wallet を準備します。
詳しくは、下記の公式サイトをご確認ください。

- [Wallet の設定](https://arweave.app/welcome)
- [Wallet の作成手順等の解説](https://docs.arweave.org/info/wallets/arweave-wallet)

### private key の保存

CLI を使用するには、arweave の wallet の秘密鍵が必要になります。

private key をプロジェクト内に保存する前に、必ず`.gitignore`の設定を行ってください。

<br>

## Ardrive へのアップロード

### ドライブの作成

フォルダをアップロードするドライブを作っていきます。
※`{}`内部を適宜変更してください。

`ardrive create-drive --wallet-file {/path/to/my/wallet.json} --drive-name "{My Public Archive}"`

ドライブの `entityId` をメモしておきます。

### ドライブにフォルダをアップロードする

デプロイ済みのフォルダをアップロードしていきます。

`ardrive upload-file --local-path {./build} --parent-folder-id {drive entityId} -w {/path/to/my/wallet.json}`

アップロードの状態を確認するには、次のコマンドを使用します。

`ardrive tx-status -t "{bundleTxId}"`

返答は次の通りです。

- Pending:保留中
- Confirming:処理中
- Confirmed:完了
- Not Found:見つかりません

`Confirming`になれば、次のステップに移っても*大体*大丈夫です。
詳しくは、公式ドキュメントを見てね。

### フォルダにマニフェストを作る

フォルダがアップロードされたら`Confirmed`、フォルダの中にマニフェストを作ります。

`ardrive create-manifest -f "{folder entityId}" -w {/path/to/my/wallet.json}`

`links`の一番上の URL が NFT のメタデータに埋め込む URL になります。
きちんとデータが反映できているか、実際にブラウザ等で確認してくださいね。
