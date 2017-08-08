import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from '@angular/http';

export class CustomRequestOptions extends BaseRequestOptions {
    merge(options?:RequestOptionsArgs):RequestOptions {
        options.url = "http://60.205.212.16:8081" + options.url;
        var result = super.merge(options);
        result.merge = this.merge;
        return result;
    }
}
