//imports
import Download from "download";

/**
 * Download a file from Internet.
 *
 * @param src:string    The source URL.
 * @param dst:string    The destination dir.
 * @param done:function The done function.
 */
export default function download(src, dst, done) {
  new Download().get(src, dst).run(done);
}
