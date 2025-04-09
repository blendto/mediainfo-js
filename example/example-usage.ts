import { MediaInfo } from '../src';
import * as MediaInfoWasmLib from '../lib/MediaInfoWasm';

async function exec() {
  const mediaInfo = new MediaInfo(MediaInfoWasmLib);
  await mediaInfo.instantiateLib();
  const data = await mediaInfo.getInfo('https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4');
  console.log(JSON.stringify(data, null, 2));
}

exec();